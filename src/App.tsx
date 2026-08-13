import Color from "color";

type Mode = {
  name: string;
  adjectives: string[];
  examples?: { name: string; author?: string; url?: string }[];
  color: string;
  type: "minor" | "major";
  comments?: string[];
  intervals: number[];
  characteristic?: string[];
  notes: string[];
};

const MAJOR_MODES: Mode[] = [
  {
    name: "Lydien",
    type: "major",
    adjectives: ["🌬️ Aérien", "💭 Rêveur", "🪄 Magique"],
    examples: [
      {
        name: "Dreamsville",
        author: "Henri Mancini",
        url: "https://www.youtube.com/watch?v=FWh-ppeyFB4",
      },
      {
        name: "The Simpson thème",
        url: "https://www.youtube.com/watch?v=aPzS3QYb868",
      },
    ],
    color: "#EEF525",
    intervals: [2, 2, 2, 1, 2, 2, 1],
    characteristic: ["#4"],
    comments: [],
    notes: ["1F", "1G", "1A", "1B", "2C", "2D", "2E", "2F"],
  },
  {
    name: "Ionien",
    type: "major",
    adjectives: ["😃 Joyeux", "🌟 Clair", "😌 Serein"],
    examples: [
      {
        name: "La mélodie du bonheur",
        author: "DE RÉ MI",
        url: "https://www.youtube.com/watch?v=UPnyBCpOzKc",
      },
      {
        name: "Let it be",
        author: "The Beatles",
        url: "https://www.youtube.com/watch?v=CGj85pVzRJs",
      },
    ],
    color: "#ffdf00",
    intervals: [2, 2, 1, 2, 2, 2, 1],
    comments: [],
    notes: ["1C", "1D", "1E", "1F", "1G", "1A", "1B", "2C"],
  },
  {
    name: "Mixolydien",
    type: "major",
    adjectives: ["🎉 Festif", "🪟 Ouvert", "🎷 Bluesy"],
    examples: [
      {
        name: "Sweet home Alabama",
        author: "Lynyrd Skynyrd",
        url: "https://www.youtube.com/watch?v=-35W_FWCT9Q",
      },
      {
        name: "Norwegian Wood",
        author: "The Beatles",
        url: "https://www.youtube.com/watch?v=B_RQv7OMJFI",
      },
    ],
    color: "#ffa500",
    characteristic: ["b7"],
    intervals: [2, 2, 1, 2, 2, 1, 2],
    comments: [],
    notes: ["1G", "1A", "1B", "2C", "2D", "2E", "2F", "2G"],
  },
];

const MINOR_MODES: Mode[] = [
  {
    name: "Dorien",
    type: "minor",
    adjectives: ["🎹 Soulful / jazzy", "❤️‍🔥 Chaleureux", "⚡ Énergique"],
    examples: [
      {
        name: "Riders on the storm",
        author: "The Doors",
        url: "https://www.youtube.com/watch?v=7G2-FPlvY58",
      },
      {
        name: "Eleanore Rigby",
        author: "The Beatles",
        url: "https://www.youtube.com/watch?v=B_RQv7OMJFI",
      },
    ],
    color: "#4A2B91",
    characteristic: ["6M"],
    intervals: [2, 1, 2, 2, 2, 1, 2],
    comments: [],
    notes: ["1D", "1E", "1F", "1G", "1A", "1B", "2C", "2D"],
  },
  {
    name: "Éolien",
    type: "minor",
    adjectives: ["🥀 Mélancolique", "😢 Nostalgie", "🚪 Intérieur"],
    examples: [
      {
        name: "Zombie",
        author: "The Cranberries",
        url: "https://www.youtube.com/watch?v=6Ejga4kJUts",
      },
      {
        name: "All along the watchtower",
        author: "Jimmy Hendrix",
        url: "https://www.youtube.com/watch?v=TLV4_xaYynY",
      },
    ],
    color: "#4169E1",
    intervals: [2, 1, 2, 2, 1, 2, 2],
    comments: [],
    notes: ["1A", "1B", "2C", "2D", "2E", "2F", "2G", "2A"],
  },
  {
    name: "Phrygien",
    type: "minor",
    adjectives: ["🥸 Mystérieux", "🌑 Sombre", "🔪 Menaçant"],
    examples: [
      {
        name: "Wherever I may roam",
        author: "Metallica",
        url: "https://www.youtube.com/watch?v=Z-cEyiM9adE",
      },
      {
        name: "Flamenco traditionnel",
      },
    ],
    color: "#7B3422",
    characteristic: ["b2"],
    intervals: [1, 2, 2, 2, 1, 2, 2],
    comments: [],
    notes: ["1E", "1F", "1G", "1A", "1B", "2C", "2D", "2E"],
  },
  {
    name: "Locrien",
    type: "minor",
    adjectives: ["😨 Inquiétant", "⛓️‍💥 Instable", "🙉 Dissonant"],
    examples: [
      {
        name: "Jazz out",
      },
    ],
    color: "#4E4D4C",
    characteristic: ["b2", "b5"],
    intervals: [1, 2, 2, 1, 2, 2, 2],
    comments: [],
    notes: ["1B", "2C", "2D", "2E", "2F", "2G", "2A", "2B"],
  },
];

function App() {
  return (
    <div className="w-screen h-screen mx-auto p-6">
      <div className="flex flex-row justify-center gap-3  flex-wrap">
        {MAJOR_MODES.map((mode) => (
          <ModeCard key={mode.name} mode={mode} />
        ))}
      </div>

      <div className="py-2" />

      <div className="flex flex-row justify-center gap-3  flex-wrap">
        {MINOR_MODES.map((mode) => (
          <ModeCard key={mode.name} mode={mode} />
        ))}
      </div>
    </div>
  );
}

export function ModeCard({ mode }: { mode: Mode }) {
  return (
    <div
      className="p-2 rounded-md border w-60 flex flex-col gap-3 bg-black/20 relative"
      style={{ border: `10px solid ${mode.color}` }}
    >
      <CharacteristicsBadge characteristics={mode.characteristic} />

      <Header mode={mode} />

      <hr className="w-full" />

      <Adjectives adjectives={mode.adjectives} />

      <IntervalPattern mode={mode} />

      <hr className="w-full" />

      {mode.examples && (
        <>
          <ul className="text-xs">
            {mode.examples.map((example) => (
              <li key={example.name} className="p-1">
                <Example example={example} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function Header({ mode }: { mode: Mode }) {
  return (
    <>
      <div className="text-center text-xl font-bold">{mode.name}</div>
      <Piano accentColor={mode.color} activeNotes={mode.notes} />
    </>
  );
}

function CharacteristicsBadge({
  characteristics,
}: {
  characteristics?: string[];
}) {
  return (
    <>
      {characteristics && (
        <div className="absolute rounded-tr-md rounded-4xl -top-2.5 -right-2.5 bg-green-700 font-bold text-white w-10 p-1 text-center">
          {characteristics.map((characteristic) => (
            <div key={characteristic}>{characteristic}</div>
          ))}
        </div>
      )}
    </>
  );
}

function Adjectives({ adjectives }: { adjectives: Mode["adjectives"] }) {
  return (
    <ul className="font-medium">
      {adjectives.map((adjective) => (
        <li className="bg-black/10 rounded-md px-0.5 my-0.5" key={adjective}>
          {adjective}
        </li>
      ))}
    </ul>
  );
}

function IntervalPattern({ mode }: { mode: Mode }) {
  return (
    <div className="flex mx-auto">
      {mode.intervals.map((interval, index) => {
        const halfColor = new Color(mode.color);
        const wholeColor = new Color("#FFFFFF");

        return (
          <div
            className="w-7 text-center text-sm font-medium"
            key={index}
            style={{
              backgroundColor: interval === 1 ? mode.color : "white",
              color:
                interval === 1
                  ? halfColor.negate().toString()
                  : wholeColor.negate().toString(),
            }}
          >
            {interval === 1 ? "H" : "W"}
          </div>
        );
      })}
    </div>
  );
}

function Example({
  example,
}: {
  example: { name: string; author?: string; url?: string };
}) {
  if (!example.url) {
    return (
      <>
        {example.name}{" "}
        <span className="font-light">
          {example.author && ` - ${example.author}`}
        </span>
      </>
    );
  }

  return (
    <a href={example.url}>
      {example.name}{" "}
      <span className="font-light">
        {example.author && ` - ${example.author}`}
      </span>
    </a>
  );
}

function Piano({
  activeNotes,
  accentColor,
}: {
  activeNotes: string[];
  accentColor: string;
}) {
  return (
    <div className="flex justify-center">
      <div
        className="border border-r-0 w-3 h-5 relative bg-white"
        data-note="1C"
        style={
          activeNotes.includes("1C")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 relative bg-black w-2 h-3 -ml-1 -mr-1 z-1"
        data-note="1C#"
        style={
          activeNotes.includes("1C#")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 w-3 h-5 relative bg-white"
        data-note="1D"
        style={
          activeNotes.includes("1D")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 relative bg-black w-2 h-3 -ml-1 -mr-1 z-1"
        data-note="1D#"
        style={
          activeNotes.includes("1D#")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border w-3 h-5 relative bg-white"
        data-note="1E"
        style={
          activeNotes.includes("1E")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 w-3 h-5 relative bg-white border-l-0"
        data-note="1F"
        style={
          activeNotes.includes("1F")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 relative bg-black w-2 h-3 -ml-1 -mr-1 z-1"
        data-note="1F#"
        style={
          activeNotes.includes("1F#")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 w-3 h-5 relative bg-white"
        data-note="1G"
        style={
          activeNotes.includes("1G")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 relative bg-black w-2 h-3 -ml-1 -mr-1 z-1"
        data-note="1G#"
        style={
          activeNotes.includes("1G#")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 w-3 h-5 relative bg-white"
        data-note="1A"
        style={
          activeNotes.includes("1A")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 relative bg-black w-2 h-3 -ml-1 -mr-1 z-1"
        data-note="1A#"
        style={
          activeNotes.includes("1A#")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border w-3 h-5 relative bg-white"
        data-note="1B"
        style={
          activeNotes.includes("1B")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 w-3 h-5 relative bg-white border-l-0"
        data-note="2C"
        style={
          activeNotes.includes("2C")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 relative bg-black w-2 h-3 -ml-1 -mr-1 z-1"
        data-note="2C#"
        style={
          activeNotes.includes("2C#")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 w-3 h-5 relative bg-white"
        data-note="2D"
        style={
          activeNotes.includes("2D")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 relative bg-black w-2 h-3 -ml-1 -mr-1 z-1"
        data-note="2D#"
        style={
          activeNotes.includes("2D#")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border w-3 h-5 relative bg-white"
        data-note="2E"
        style={
          activeNotes.includes("2E")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 w-3 h-5 relative bg-white border-l-0"
        data-note="2F"
        style={
          activeNotes.includes("2F")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 relative bg-black w-2 h-3 -ml-1 -mr-1 z-1"
        data-note="2F#"
        style={
          activeNotes.includes("2F#")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 w-3 h-5 relative bg-white"
        data-note="2G"
        style={
          activeNotes.includes("2G")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 relative bg-black w-2 h-3 -ml-1 -mr-1 z-1"
        data-note="2G#"
        style={
          activeNotes.includes("2G#")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 w-3 h-5 relative bg-white"
        data-note="2A"
        style={
          activeNotes.includes("2A")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border border-r-0 relative bg-black w-2 h-3 -ml-1 -mr-1 z-1"
        data-note="2A#"
        style={
          activeNotes.includes("2A#")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
      <div
        className="border w-3 h-5 relative bg-white"
        data-note="2B"
        style={
          activeNotes.includes("2B")
            ? { backgroundColor: accentColor }
            : undefined
        }
      ></div>
    </div>
  );
}

export default App;
