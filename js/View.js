import { Elements } from "./Elements.js";

const View = {
    render( number ){
        Elements.counter.innerText = number;
    }
};

export { View };
