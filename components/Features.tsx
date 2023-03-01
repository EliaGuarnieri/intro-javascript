import {
  CodeBracketIcon,
  RectangleGroupIcon,
  SparklesIcon,
  MagnifyingGlassCircleIcon,
  InformationCircleIcon,
  PlayIcon,
  VariableIcon,
  TagIcon,
  PlusSmallIcon,
  Bars2Icon,
  ShareIcon,
  QuestionMarkCircleIcon,
  MinusCircleIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  ArrowRightCircleIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Hello, world!",
    icon: InformationCircleIcon,
  },
  {
    name: "Variabili",
    icon: VariableIcon,
  },
  {
    name: "Data Types",
    icon: TagIcon,
  },
  {
    name: "Basic Operators",
    icon: PlusSmallIcon,
  },
  {
    name: "Comparisons",
    icon: Bars2Icon,
  },
  {
    name: "Conditional Statements",
    icon: ShareIcon,
  },
  {
    name: "Logical Operators",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Nullish coaleshing operator '??'",
    icon: MinusCircleIcon,
  },
  {
    name: "Loops: while and for",
    icon: ArrowPathIcon,
  },
  {
    name: "'switch' statement",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: "Functions",
    icon: ArrowRightCircleIcon,
  },
];



function Features() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 my-12">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
