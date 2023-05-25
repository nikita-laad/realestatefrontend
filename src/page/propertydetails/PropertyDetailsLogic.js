import { useEffect, useState } from "react";
import createAPI from '../../api/Api';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
const PropertyDetailsLogic = () => {
  const [propertyDetails, setPropertyDetails] = useState('');
    const [loader, setLoader] = useState(false);
    const apiCreator = createAPI();
    const api = apiCreator(); 
    const { slug } = useParams();//Get id
    useEffect(()=>{
        getPropertyDetails(slug);
    },[]);
     // Get property api
    const getPropertyDetails = async(slug) =>{
        setLoader(true);
        try {
        const body = {
            slug: slug
        };
        const res = await api.post(`/properties/details`, body)
        const resData = res.data;
        if(resData.status === true){
            setPropertyDetails(resData.property);
        }else if(resData.status === false){
            toast.error(resData.message);
        }else{
            toast.error(resData.message);
        }
        }catch (error) {
            const errorResponse = error.response.data;
            const message = errorResponse.message;
            toast.error(message);
        }finally{
            setLoader(false);
        }
      }
      // End
    return {propertyDetails, loader}
}

export default PropertyDetailsLogic
