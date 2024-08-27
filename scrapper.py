import requests
from bs4 import BeautifulSoup
import os
import csv

# Function to fetch and parse the webpage
def fetch_webpage(url):
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise HTTPError for bad responses
        return BeautifulSoup(response.content, "html.parser")
    
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return None


# Function to extract information based on a label
def get_info(soup, *labels):
    for label in labels:
        element = soup.find(string=label)
        if element:
            return element.find_next().text.strip()
    return "Not Available"

# Function to extract services based on multiple headers
def extract_services(soup, *headers):
    services_list = []

    for header in headers:
        header_element = soup.find("h2", string=lambda text: text and header in text)
        if header_element:
            ul = header_element.find_next_sibling("ul")
            if ul:
                services_list.extend(extract_nested_list(ul))
            else:
                paragraphs = soup.find_all("p")
                for p in paragraphs:
                    if header in p.text:
                        services_list.append(p.text.strip())
            break

    if not services_list:
        ul = soup.find("ul")
        if ul:
            services_list.extend(extract_nested_list(ul))
        paragraphs = soup.find_all("p")
        for p in paragraphs:
            if "service" in p.text.lower():
                services_list.append(p.text.strip())

    return "\n".join(services_list)

# Function to recursively extract items from nested <ul> lists
def extract_nested_list(ul):
    items = []
    for li in ul.find_all("li", recursive=False):
        text = li.get_text(strip=True)
        nested_ul = li.find("ul")
        if nested_ul:
            nested_items = extract_nested_list(nested_ul)
            text += ":\n" + "\n".join(f"- {item}" for item in nested_items)
        items.append(text)
    return items

# Function to scrape data and return it as a dictionary
def scrape_and_save(url):
    soup = fetch_webpage(url)
    if soup is None:
        print(f"Skipping URL due to fetch error: {url}")
        return None
    print(soup.prettify())
    service_provider_name = soup.find("h2").text.strip() if soup.find("h2") else "Not Available"
    services = extract_services(soup, "SERVICES WE PROVIDE", "Our Services", "OUR SERVICES")
    paragraphs = soup.find_all("p")
    service_description = paragraphs[0].text.strip() if paragraphs else "Not Available"
    location = get_info(soup, "Location")
    website = get_info(soup, "Website")
    email = get_info(soup, "Email")
    contact = get_info(soup, "Phone", "Mobile")

    customers_header = soup.find("h2", string="Some of Our Customers")
    customers_list = []
    if customers_header:
        ul = customers_header.find_next_sibling("ul")
        if ul:
            for li in ul.find_all("li"):
                customers_list.append(li.text.strip())


    return {
        "Service Provider Name": service_provider_name,
        "Type of Service": services,
        "Service Description": service_description,
        "Key Clients and References": ", ".join(customers_list),
        "Contact": contact,
        "Location": location,
        "Website": website,
        "Email": email
    }
# List of URLs to scrape
urls = [
    "https://www.2merkato.com/directory/33619-lkiet-property-valuation-management",
  
    # Add more URLs as needed
]

# Output CSV file path
output_csv_path = os.path.join("scraped_data", "scraped_data.csv")

# Ensure the output directory exists
os.makedirs("scraped_data", exist_ok=True)

# Open the CSV file for writing
with open(output_csv_path, 'w', newline='', encoding='utf-8') as csv_file:
    fieldnames = [
        "Service Provider Name", "Type of Service", "Service Description", 
        "Key Clients and References", "Contact", "Location", "Website", "Email"
    ]
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    writer.writeheader()

    # Loop through each URL, scrape data, and write to CSV
    for index, url in enumerate(urls, start=1):
        print(f"Processing URL: {url}")
        data = scrape_and_save(url)
        if data:
            writer.writerow(data)

print("Finished processing all URLs and saved data to CSV file.")
