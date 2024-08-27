import React from "react";
import * as Components from "./Components";
// import Footer from '../DetailsBar';
import investorImage from '../../assets/businessmen.jpg';
import FormPage from "./FormPage";
import Footer from "../Footer";
function login (){
    const [signIn, toggle] = React.useState(true);
    return (
      <div className="min-h-screen flex flex-col justify-between " >
       <div className="flex flex-grow">
    
        <div className="w-full lg:w-1/2 ">
      <Components.Container className=" z-20">
             
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form className="dark:text-dark">
            <Components.Title>Sign in</Components.Title>
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Anchor href="#">Forgot your password?</Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
      </div>
      <div className="hidden lg:flex w-2/5 bg-cover bg-center " style={{ backgroundImage: `url(${investorImage })`, marginLeft: '100px',marginRight: '-600px'  ,marginTop: '-17px',width:'800px',height: '73vh'  }}>
     
        </div>
     
   </div>
   <FormPage />
     <Footer/>
      </div>
      
         
    );

  
}

export default login
