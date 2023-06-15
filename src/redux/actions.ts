export const GET_PROYECTS = "GET_PROYECTS"
export const GET_JOBS = "GET_JOBS"

export const getProyects = (boolean:boolean) =>{
    return ({
        type:GET_PROYECTS,
        payload:boolean,
    })
}

export const getJobs = (boolean:boolean) =>{
    return ({
        type:GET_JOBS,
        payload:boolean,
    })
}