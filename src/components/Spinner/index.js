import React from "react";
import "./styles.css";

export default function Spinner() {
    return (
        <div class="lds-ring">
            <div></div><div></div><div></div><div></div>
        </div>
    );
}
