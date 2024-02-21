import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../auth/authConfig";
import Logo from '../../images/logo/windows-azure.svg';
 const SignInButtons = () => {
    const { instance } = useMsal();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleLogin =  () => {
        setAnchorEl(null);
               instance.loginPopup(loginRequest);
       
    }

    return (
        <div>
             <button onClick={handleLogin} className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50 mt-2">
                      <span>
                      <img  src={Logo}  width="20" height="20"alt="Logo" />
                        
                      </span>
                      Log in with Azure AD
                    </button>
            
           
        </div>
    )
};
export default SignInButtons;