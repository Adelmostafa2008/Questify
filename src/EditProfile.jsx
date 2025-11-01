import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useAuth } from "./AuthContext.jsx";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import api from "./AxiosHelper.jsx";
import { useSnack } from "./SnackBarContext.jsx";
import { FaRegEdit } from "react-icons/fa";

export default function EditProfile() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const { ShowSnackBar } = useSnack();
  const [oldUser, setOldUser] = useState({});
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [preview, setPreview] = useState("");
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [newUser, setNewUser] = useState({
    UserName: "",
    Email: "",
    Description: ""
  });

  // Fetch user data
  const fetchUser = async () => {
    try {
      const res = await api.get(`/regesteration/${user.id}`);
      setOldUser(res.data);
      setNewUser({
        UserName: res.data.userName,
        Email: res.data.email,
        Description: res.data.description,
      });
      setPreview(res.data.profilePic ? `http://localhost:5226/${res.data.profilePic}` : null);
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  useEffect(() => {
    if (user?.id) fetchUser();
  }, [user]);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // preview only
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Update user
  const UpdateUser = async () => {
    try {
      const formData = new FormData();
      formData.append("UserName", newUser.UserName);
      formData.append("Email", newUser.Email);
      if (newUser.Description == null || newUser.Description.trim() === "") {
        formData.append("Description", " ");
      }else{
        formData.append("Description", newUser.Description);
      }

      if (selectedFile) {
        formData.append("ProfilePicFile", selectedFile);

      }

      const res = await api.put(`/regesteration/${user.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });


      updateUser(res.data);

    } catch (error) {
      ShowSnackBar(error.response?.data || error.message, "error");
      throw error
    }
  };


  return (
    <>
      <Header />
      <div className="flex justify-center items-start my-16">
        <div className="w-[42%] rounded-xl bg-[#181818] border border-[#2a2a2a] shadow-[0_0_25px_rgba(0,0,0,0.6)] relative overflow-hidden px-7">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d]/60 via-transparent to-[#111]/90 pointer-events-none"></div>
          <div className="absolute -top-16 -left-16 w-[250px] h-[250px] rounded-full bg-[#ce7d63]/5 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 w-[250px] h-[250px] rounded-full bg-[#ce7d63]/5 blur-3xl"></div>

          <div className="relative z-10">
            <div className="py-6 border-b border-[#2a2a2a]">
              <h2 className="text-gray-200 text-xl font-bold tracking-wide uppercase">
                Edit Profile
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Write down your changes, You better not forget.
              </p>
            </div>

            <div className="mt-5 mb-3 flex flex-col justify-center gap-y-5">

              <img src={preview ? preview : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} className="rounded-full max-w-[300px] border-2 border-[#2a2a2a] max-h-[300px] mx-auto" alt="profile preview" />

              <button
                onClick={handleButtonClick}
                className="relative bg-[#1f1f1f] border border-[#333333] text-gray-300 
                          font-semibold px-6 py-2 rounded-lg 
                          hover:border-gray-400 hover:text-gray-200
                          hover:shadow-[0_0_10px_rgba(192,192,192,0.5)]
                          transition-all duration-300"
              >
                Change profile picture
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <form className="flex flex-col gap-y-5 py-6">
              {/* Username */}
              <div className="flex flex-col">
                <label className="text-gray-400 text-sm mb-2">Username</label>
                <div className="flex items-center border border-[#2a2a2a] rounded-md focus-within:border-[#ce7d63] focus-within:shadow-[0_0_6px_#ce7d6344] bg-[#111]">
                  <FaUser className="ml-3 text-[#555]" />
                  <input
                    type="text"
                    placeholder="example123"
                    value={newUser.UserName}
                    className="w-full px-3 py-2 bg-transparent focus:outline-none text-gray-200"
                    onChange={(e) =>
                      setNewUser((prev) => ({ ...prev, UserName: e.target.value }))
                    }
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-gray-400 text-sm mb-2">E-mail</label>
                <div className="flex items-center border border-[#2a2a2a] rounded-md focus-within:border-[#ce7d63] focus-within:shadow-[0_0_6px_#ce7d6344] bg-[#111]">
                  <FaEnvelope className="ml-3 text-[#555]" />
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={newUser.Email}
                    className="w-full px-3 py-2 bg-transparent focus:outline-none text-gray-200"
                    onChange={(e) =>
                      setNewUser((prev) => ({ ...prev, Email: e.target.value }))
                    }
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <label className="text-gray-400 text-sm mb-2">Description (optional)</label>
                <div className="flex items-center border border-[#2a2a2a] rounded-md focus-within:border-[#ce7d63] focus-within:shadow-[0_0_6px_#ce7d6344] bg-[#111] relative">

                  <FaRegEdit className="absolute top-3 left-3 text-gray-400" />
                  <textarea
                    placeholder="Ex. I am a 2x boxing heavyweight champion of the world"
                    defaultValue={newUser?.Description}
                    className="w-full pl-10 pr-3 py-2 bg-transparent focus:outline-none text-gray-200 resize-none h-[200px]  rounded-md"
                    onChange={(e) =>
                      setNewUser((prev) => ({ ...prev, Description: e.target.value }))
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                  >

                  </button>
                </div>
              </div>

            </form>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pb-7">
              <button
                className="text-gray-300 border border-[#2a2a2a] px-5 py-2 text-sm rounded-md hover:bg-[#222] transition"
                onClick={() => navigate("/Profile")}
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  if (loading || success) return;
                  if (!newUser.UserName.trim() || !newUser.Email.trim()) {
                    ShowSnackBar("All fields should be filled", "warn");
                    return;
                  }
                  setLoading(true);
                  try {
                    await UpdateUser();
                    setSuccess(true);
                    setTimeout(() => navigate('/Profile'), 1000); // Redirect after 1.5s
                  } catch (err) {
                    console.error(err);
                  } finally {
                    setLoading(false);
                  }
                }}
                disabled={loading || success}
                className={`flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition-colors duration-300
        ${success
                    ? "bg-green-600 text-white shadow-[0_0_4px_#16A34A] "
                    : "bg-[#ce7d63] border border-[#ce7d63] text-white shadow-[0_0_4px_#ce7d63aa]"
                  }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                      />
                    </svg>
                    Applying changes...
                  </>
                ) : success ? (
                  "Done!"
                ) : (
                  "Apply changes"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
