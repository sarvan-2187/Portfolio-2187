import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "UserFriendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable", // fixed typo
];

export const TapeSection = () => {
  return (
    <section id="tape" className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...Array(2)].map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word, i) => (
                  <div
                    key={`${word}-${idx}-${i}`}
                    className="inline-flex gap-4 items-center text-gray-900"
                  >
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
