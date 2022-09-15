import React, { useEffect } from "react";

const SearchedProfile = ({searchedProfile, setSearchedProfileData, searchedProfileData}) => {


    useEffect(() => {
        fetch(`http://localhost:9292/users-by-name/${searchedProfile}`).then(res => res.json())
        .then((data) => {
            setSearchedProfileData(data)
        })
    }, [])

}

export default SearchedProfile