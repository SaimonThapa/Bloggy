const apiRequest = async(url='', optionObj=null) => {
    try{
        const response = await fetch(url, optionObj);
        if(!response.ok){
            throw new Error('Please reload app')
        }
        return null;
    }
    catch(err){
        return err.message;
    }
}

export default apiRequest
