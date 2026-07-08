import { useState } from "react";

let setGlobalRefresh;
export function useGlobalRefresh(){
    const [refresh,setRefresh] = useState(0)

    setGlobalRefresh = setRefresh;

    return refresh;
}

export function triggerRefresh(){
    setGlobalRefresh(prev => prev+1)
}