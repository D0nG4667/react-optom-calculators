import { createContext, useState } from "react";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
    const [ clSphere, setClSphere ] = useState({OD: "", OS: ""});
    const [ clCylinder, setClCylinder ] = useState({OD: "", OS: ""});
    const [ clAxis, setClAxis ] = useState({OD: "", OS: ""});
    const [ sphericalEquivalent, setSphericalEquivalent ] = useState(false);

    const value = {
        clSphere,
        setClSphere,
        clCylinder,
        setClCylinder,
        clAxis,
        setClAxis,
        sphericalEquivalent,
        setSphericalEquivalent,
    };

  return (
    <ContactContext.Provider value={value}>
        {children}
    </ContactContext.Provider>
  );
};


export default ContactProvider