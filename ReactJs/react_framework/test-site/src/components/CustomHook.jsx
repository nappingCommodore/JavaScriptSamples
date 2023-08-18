import React, {useState, useEffect, useRef} from 'react';

const CustomHook = (initialCount) => {
    const [data, setData] = useState(initialCount);

    useEffect(() => {
        setTimeout(() => {
            setData(data + 1);
        }, 1000);
    }
    ,[data]);

    return [data];
}

export default CustomHook;
