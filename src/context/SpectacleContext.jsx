import { createContext, useState } from "react";

import powers from "../powers.json";

export const SpectacleContext = createContext();

const SpectacleProvider = ({ children }) => {
    const [sphereRange] = useState(powers.spheres);
    const [cylinderRange] = useState(powers.cylinders);
    const [axisRange] = useState(powers.axes);
    const [vertexRange] = useState(powers.vertices);

    const [ sphere, setSphere ] = useState({OD: "", OS:""});
    const [ cylinder, setCylinder ] = useState({OD: "", OS:""});
    const [ axis, setAxis ] = useState({OD: "", OS:""});
    const [ bvd, setBvd ] = useState({OD: "12", OS:"12"});

    const value = {
        sphereRange,
        cylinderRange,
        axisRange,
        vertexRange,
        sphere,
        setSphere,
        cylinder,
        setCylinder,
        axis,
        setAxis,
        bvd,
        setBvd,
    };

  return (
    <SpectacleContext.Provider value={value}>
        {children}
    </SpectacleContext.Provider>
  );
};


export default SpectacleProvider