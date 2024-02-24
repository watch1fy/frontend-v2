'use client'

import { Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { thirdPartySignInAndUp } from 'supertokens-web-js/recipe/thirdpartyemailpassword';

function Page() {
  const router = useRouter()
  
  useEffect(() => {
    async function handleGoogleCallback() {
      try {
        const response = await thirdPartySignInAndUp();

        if (response.status === "OK") {
          console.log(response.user)
          if (response.createdNewRecipeUser && response.user.loginMethods.length === 1) {
            console.log('SIGN UP')
          } else {
            console.log('SIGN IN')
          }
          router.push("/");;
        } else if (response.status === "SIGN_IN_UP_NOT_ALLOWED") {
          console.log("Auto account linking")
        } else {
          console.error("No email provided by social login. Please use another form of login");
          router.push("/"); // redirect back to login page
        }
      } catch (err: any) {
        if (err.isSuperTokensGeneralError === true) {
          console.error(err.message);
        } else {
          console.error("Oops! Something went wrong.", err);
        }
      }
    }

    handleGoogleCallback()

    return () => {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <Spinner
        label="Please wait. Do not refresh the page or close the browser!"
        color="default"
        size='lg'
        labelColor="foreground" />
    </div>
  )
}

export default Page;
