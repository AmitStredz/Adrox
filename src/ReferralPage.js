import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const ReferralPage = () => {
  const [referralInfo, setReferralInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); 
  const referralCode = searchParams.get("referral_code");

  console.log("referral_code: ", referralCode);
  
  useEffect(() => {
    if (referralCode) {
      // Call the backend API to get the sponsor user ID based on the referral code
      const fetchReferralInfo = async () => {
        try {
          const response = await axios.get(`https://adrox-5ed452640f6d.herokuapp.com/api/users/referral?referral_code=${referralCode}`, {
            params: { referral_code: referralCode }
          });
          console.log("response: ", response);
          if(response?.data?.sponsor_name){
            setReferralInfo(response?.data);
            Cookies.set("sponsor_name", response?.data?.sponsor_name);
            Cookies.set("sponsor_code", referralCode);
            navigate("/signup");
          }
        } catch (err) {
          setError('Invalid referral code.');
        }finally{
          setLoading(false);
        }
      };

      fetchReferralInfo();
    }else{
      console.log("Referral code not found from url...");
      
    }
  }, [referralCode]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>You've been referred by: {referralInfo?.sponsor_name}</h2>
      {/* <p>Your referral position is: {referralInfo?.position}</p> */}
      {/* Proceed with onboarding */}
    </div>
  );
};

export default ReferralPage;