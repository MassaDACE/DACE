import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { ArrowUpTrayIcon } from '@heroicons/react/20/solid'

function ImageUploader() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList as never[]);
    };
    return (
        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div>
            <div className="flex items-center justify-center">
                <div
                className="border border-dashed	border-2 rounded border-gray-800 py-40 px-20 w-30 text-gray-600 bg-gray-200"
                onClick={onImageUpload}
                {...dragProps}
                >
                    <div className="flex items-center justify-center">
                    <ArrowUpTrayIcon className="w-10" aria-hidden="true" />
                    </div>
                    Upload new image
                </div>
            </div>
            {/* <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))} */}
          </div>
        )}
      </ImageUploading>
    );
}

export default ImageUploader;