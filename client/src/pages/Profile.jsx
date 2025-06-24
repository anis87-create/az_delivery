import React from 'react'
import { LuUser, LuCamera } from 'react-icons/lu';
import { useSelector } from 'react-redux';

const Profile = () => {
    const {user} = useSelector(state => state.auth);
    return (
        <div className='container w-4/5 mx-auto'>
            <main className="flex-1 container px-4 py-6">
                <div className="max-w-2xl mx-auto space-y-6" style={{margin:'80px auto'}}>
                {/* Profile Picture Card */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-none">
                        <div className="flex flex-col space-y-1.5 p-6 border-none">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                                        {/* User Icon */}
                                        <span className="w-5 h-5 text-current">
                                                <LuUser />
                                        </span>
                                        Profile Picture
                                </h3>
                        </div>
                        <div className="p-6 pt-0 border-none">
                                <div className="flex items-center gap-6">
                                        <div className="relative">
                                                <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 bg-gray-100">
                                                        <img className="aspect-square h-full w-full" alt="" />
                                                </span>
                                                <label htmlFor="profile-image" className="absolute -bottom-2 -right-2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full cursor-pointer transition-colors">
                                                        {/* Camera Icon */}
                                                        <span className="w-4 h-4 text-current">
                                                                <LuCamera />
                                                        </span>
                                                </label>
                                                <input id="profile-image" accept="image/*" className="hidden" type="file" />
                                        </div>
                                        <div>
                                                <h3 className="font-medium">Change Profile Picture</h3>
                                                <p className="text-sm text-gray-500 mt-1">Upload a new profile picture. Recommended size: 400x400px</p>
                                        </div>
                                </div>
                        </div>
                </div>
                {/* Personal Information Card */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-none">
                    <div className="flex flex-col space-y-1.5 p-6 border-none">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                            <LuUser className="w-5 h-5" />
                            Personal Information
                        </h3>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">Full Name</label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none"
                                    id="name"
                                    placeholder="Enter your full name"
                                    value={user.fullName}
                                    style={{ outline: '0px' }}
                                    readOnly
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">Phone Number</label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    value={user.phone}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <LuUser className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground pl-10 focus:outline-none"
                                    id="email"
                                    placeholder="Enter your email address"
                                    type="email"
                                    value={user.email}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="address">Address</label>
                            <div className="relative">
                                <LuUser className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground pl-10 focus:outline-none"
                                    id="address"
                                    placeholder="Enter your address"
                                    value={user.location}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Account Settings Card */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-none">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">Account Settings</h3>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                                <h3 className="font-medium">Change Password</h3>
                                <p className="text-sm text-gray-500">Update your account password</p>
                            </div>
                            <a href="/profile/change-password">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                    Change
                                </button>
                            </a>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                                <h3 className="font-medium">Two-Factor Authentication</h3>
                                <p className="text-sm text-gray-500">Add an extra layer of security</p>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                Enable
                            </button>
                        </div>
                    </div>
                </div>
                {/* Danger Zone Card */}}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-red-200">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="text-2xl font-semibold leading-none tracking-tight text-red-600">Danger Zone</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                                <div>
                                    <h3 className="font-medium text-red-800">Delete Account</h3>
                                    <p className="text-sm text-red-600">Permanently delete your account and all data</p>
                                </div>
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )


}

export default Profile
