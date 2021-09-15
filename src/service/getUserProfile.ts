const userDetails = () => {
    const profile = JSON.parse(localStorage.getItem('user_profile') || 'null');
    return profile;
}


export default userDetails;