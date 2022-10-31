import React from "react";

export default function Detail ({ params }) {
    console.log(params.id)
    return <h1>Detail {params.id}</h1>
}
