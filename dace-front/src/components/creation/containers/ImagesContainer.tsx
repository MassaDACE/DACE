import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { ArrowUpTrayIcon, XCircleIcon } from '@heroicons/react/20/solid'
import DefaultPicture from '../../../assets/default.png';

import './ImagesContainer.css';

function ImagesContainer() {
    const [images, setImages] = React.useState([ { dataURL: DefaultPicture }]);
    const maxNumber = 69;

    console.log(images)

    const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };
    return (
        <div className="overflow-auto border-r-2 border-b-2 h-full">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="dataURL"
            >
                {({
                    onImageUpload,
                    onImageRemove,
                    dragProps,
                }) => (
                    // write your building UI
                    <div>
                        <div className="mt-5 ml-5 grid grid-cols-3 gap-4">
                            {images.map((image, index) => (
                                <div key={index} className="img-container flex border-2 items-center justify-center w-full h-28">
                                    <img src={image['dataURL']} alt="" className="image border-2 border-black" />
                                    <div className="corner w-10" onClick={() => onImageRemove(index)}>
                                        <XCircleIcon className="text-red-500"/> 
                                    </div>
                                </div>
                            ))}
                                <div
                                    className="border border-dashed	border-2 rounded border-gray-800 py-8 w-full text-gray-600 bg-gray-200"
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    <div className="flex items-center justify-center">
                                        <ArrowUpTrayIcon className="w-5" aria-hidden="true" />
                                    </div>
                                    <div className="flex items-center text-sm justify-center">
                                        Upload image
                                    </div>
                                </div>
                            </div>
                    </div>

                )}
            </ImageUploading>

        </div>
    )
}

export default ImagesContainer;