import SideBar from "../component/SideBar";
import ProfileComp from "../component/ProfileComp";
import RightBar from "../component/RightBar";
export default function Profile() {
  return (
    <>
      <div className="flex flex-row justify-center h-screen bg-white">
        <SideBar></SideBar>
        <ProfileComp></ProfileComp>
        <RightBar></RightBar>
      </div>
    </>
  );
}
