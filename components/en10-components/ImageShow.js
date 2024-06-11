import ImageGallery from "react-image-gallery";

export default function ImageShow ({images, setShowImage, defaultCommentImage}) {
    /* const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ]; */

    return (
        <div id="image-show-container" onClick={(e) => {
            e.target.id === "image-show-down" && setShowImage(false)
        }}>
            <div id="image-show-down">
                <ImageGallery items={images} startIndex={defaultCommentImage}/>
            </div>
        </div>
    )
}