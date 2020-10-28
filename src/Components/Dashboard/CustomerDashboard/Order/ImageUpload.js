import React, { useState } from 'react'
import { firebaseApp, storage } from '../../../../Configs/firebaseConfig';
import { HiOutlineCloudUpload } from 'react-icons/hi';

function ImageUpload(props) {
    const [file, setFile] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState("");
    const handleImageUpload = (e) => {
        setFile(e.target.files[0])
        const file = e.target.files[0];
        const storageRef = firebaseApp.storage().ref(`event/${file.name}`);
        const task = storageRef.put(file);
        task.on(
            'state_changed',
            (snapshot) => {
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadPercentage(` Uploading : ${percentage}`);
            },
            (error) => console.log(error),
            () =>
                storage
                    .ref('event')
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => props.setImageURL(url))
        );
    }


    return (
        <>
            <div className="image-upload py-1 my-2 text-center">
                <label
                    htmlFor="file-input">
                    <HiOutlineCloudUpload />{props.label}
                </label>
                <input
                    id="file-input"
                    type="file"
                    name='file'
                    onChange={(e) => handleImageUpload(e)}
                />
            </div>
            <small className='text-dark'>{file ? file.name : null}</small>
            <small className='text-success'>{uploadPercentage === ' Uploading : 100' ? ' Uploaded' : uploadPercentage}</small>

        </>
    )
}

export default ImageUpload;
