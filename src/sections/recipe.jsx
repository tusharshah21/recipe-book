// import React from 'react'
import omlette from "../assets/image-omelette.jpeg";
function Recipe() {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center Figtree poppins-regular">
        <div className="my-[7.5rem] cardo border-[1.5px] md:w-[51%] w-[89%] bg-white rounded-3xl px-10 py-11 text-[#111111]">
          <img
            src={omlette}
            alt="omlette"
            className="w-full h-full object-cover rounded-xl"
          />
          <h1 className="mt-8 mb-4 text-[2.65rem] text-[hsl(24,5%,18%)] young-serif-regular">
            Simple Omelette Recipe
          </h1>
          <p className="poppins-regular text-[15px] text-[hsl(30,10%,34%)] leading-6 font-semibold opacity-80 mb-6">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className="bg-[color:hsl(330,100%,98%)] rounded-xl my-6">
            <ul className="p-8 list-disc poppins-bold text-[color:hsl(332,51%,32%)] list-inside text-xl">
              Preparation time
              <li className="mt-3 px-2 py-1 poppins-semibold opacity-80 text-[16px] poppins-regular text-[hsl(24,5%,18%)]">
                <span className="poppins-bold">Total:</span> Approximately 10
                minutes{" "}
              </li>
              <li className="px-2 py-1 poppins-semibold opacity-80 text-[16px] poppins-regular text-[hsl(24,5%,18%)]">
                <span className="poppins-bold">Preparation:</span> 5 minutes{" "}
              </li>
              <li className="px-2 py-1 poppins-semibold opacity-80 text-[16px] poppins-regular text-[hsl(24,5%,18%)]">
                <span className="poppins-bold">Cooking:</span> 5 minutes
              </li>
            </ul>
          </div>
          <h1 className="text-[2rem] text-[color:hsl(14,45%,36%)] text-4xl young-serif-regular">
            Ingredients
          </h1>
          <ul className="poppins-semibold list-inside list-disc text-[color:hsl(24,5%,18%)] p-4 opacity-80">
            <li className="py-1">2-3 large eggs</li>
            <li className="py-1">Salt, to taste</li>
            <li className="py-1">Pepper, to taste</li>
            <li className="py-1">1 tablespoon of butter or oil</li>
            <li className="py-1">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <div className="bg-[color:hsl(30,18%,87%)] h-[1px] w-full my-4" />

          <ul className="list-inside list-decimal opacity-80 text-[15px]">
            <h1 className="text-[color:hsl(14,45%,36%)] my-6 text-[2rem] young-serif-regular">
              Instructions
            </h1>
            <li className="pl-4 py-2">
              <span className="poppins-bold">Beat the eggs:</span> In a bowl,
              beat the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
              </li>
              <li className="pl-4 py-2">
                <span className="poppins-bold">Heat the pan:</span> Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className="pl-4 py-2">
                <span className="poppins-bold">Cook the omelette:</span> Once
                the butter is melted and bubbling, pour in the eggs. Tilt the
                pan to ensure the eggs evenly coat the surface.
              </li>
              <li className="pl-4 py-2">
                <span className="poppins-bold">Add fillings (optional):</span>{" "}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li className="pl-4 py-2">
                {" "}
                <span className="poppins-bold">Fold and serve:</span> As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li className="pl-4 py-2">
                <span className="poppins-bold">Enjoy:</span> Serve hot, with
                additional salt and pepper if needed.
              </li>
          </ul>
          <div className="bg-[color:hsl(30,18%,87%)] h-[1px] w-full my-6" />
          <h1 className="text-[hsl(14,45%,36%)] text-4xl young-serif-regular my-8">
            Nutrition
          </h1>
          <p className="opacity-80 my-6 text-[15px]">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div class="grid grid-cols-2 gap-4 poppins-semibold">
            <div class="opacity-60 pl-10">Calories</div>
            <div class="text-[hsl(14,45%,36%)] poppins-bold ">277kcal</div>
            <div class="col-span-2 bg-[color:hsl(30,18%,87%)] h-[0.5px] w-full" />
            <div class="opacity-60  pl-10">Carbs</div>
            <div class="text-[hsl(14,45%,36%)] poppins-bold">0g</div>
            <div class="col-span-2 bg-[color:hsl(30,18%,87%)] h-[0.5px] w-full" />
            <div class="opacity-60  pl-10">Protein</div>
            <div class="text-[hsl(14,45%,36%)] poppins-bold">20g</div>
            <div class="col-span-2 bg-[color:hsl(30,18%,87%)] h-[0.5px] w-full" />
            <div class="opacity-60  pl-10">Fat</div>
            <div class="text-[hsl(14,45%,36%)] poppins-bold">22g</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
