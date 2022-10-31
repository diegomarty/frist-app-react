import React, {useContext} from "react";
import Gif from "../../components/Gif";
import GifsContext from "../../contexts/GifsContext";

export default function Detail ({ params }) {
    const {gifs} = useContext(GifsContext)

    const gif = gifs.find(singleGif => singleGif.id === params.id)

    console.log(gif)
    return <Gif {...gif} />
}
