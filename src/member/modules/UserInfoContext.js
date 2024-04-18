import { createContext, useState } from "react";

const UserInfoContext = createContext({
    /*
    userInfo: {
        email: "user01@text.org",
        name: '사용자01',
    },
    */
   states: {   //상태값
    userInfo: null,
    isLogin: false,
   },
   actions : {  // 상태변경함수
    setUserInfo: null,
    setIsLogin: null,
   },
});

const UserInfoProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null);
    const [isLogin, setIsLogin] = useState(null);
    const value = {
        states: { userInfo, isLogin }, 
        actions: { setUserInfo, setIsLogin  },
    };
    return <UserInfoContext.Provider value={value}>{children}</UserInfoContext.Provider>
};
const { Consumer: UserInfoConsumer } = UserInfoContext;
export { UserInfoConsumer,UserInfoProvider};
export default UserInfoContext;