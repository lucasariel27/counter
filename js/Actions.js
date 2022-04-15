import { Elements }     from "./Elements.js";
import { View }         from "./View.js";

const Actions = {
    init(){
        const operations = {
            counterValue: Number(Elements.counter.innerText),

            decrease(){
                operations.counterValue -= 1;
            },
            
            reset(){
                operations.counterValue = 0;
            },
            
            increase(){
                operations.counterValue += 1;
            }
        };

        for ( let i of Elements.buttons )
            i.addEventListener("click", ()=>{
                const value = i.innerText.toLowerCase();

                operations[value]();
                
                View.render( operations.counterValue );
            });
        
    }
};

export { Actions };
