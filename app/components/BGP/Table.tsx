import ReactCountryFlag from "react-country-flag";

export interface Props {
  location: string;
  country: string;
  flagCode: string;
  result: string;
  time: number;
}

const Table = (props: Props) => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden sm:flex items-center justify-between text-sm py-3 px-2 border-b border-separator last:border-b-0 hover:bg-default/30 transition-colors">
        {/* Location with Flag */}
        <div className="flex items-center gap-2 min-w-[200px]">
          <ReactCountryFlag
            countryCode={props.flagCode.toUpperCase()}
            svg
            style={{
              width: "1.25rem",
              height: "1rem",
            }}
            title={props.country}
          />
          <span className="text-foreground">{props.location}</span>
        </div>

        {/* Result */}
        <div className="min-w-[120px] text-center">
          <span className="text-muted">Result: </span>
          <span className="text-foreground">{props.result}</span>
        </div>

        {/* RTT */}
        <div className="min-w-[200px] text-center">
          <span className="text-muted">Time: </span>
          <span className="text-foreground">{props.time} s</span>
        </div>

        {/* IP Address */}
        {/* <div className="min-w-[120px] text-right">
          <span className="text-muted">IP: </span>
          <span className="text-foreground">{props.ipAddress}</span>
        </div> */}
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden border border-separator rounded-lg p-4 hover:bg-default/30 transition-colors">
        {/* Location with Flag */}
        <div className="flex items-center gap-2 mb-3">
          <ReactCountryFlag
            countryCode={props.flagCode.toUpperCase()}
            svg
            style={{
              width: "1.5rem",
              height: "1.2rem",
            }}
            title={props.country}
          />
          <span className="text-foreground font-medium">{props.location}</span>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
          <div>
            <span className="text-muted">Result:</span>{" "}
            <span className="text-foreground">{props.result}</span>
          </div>
          {/* <div>
            <span className="text-muted">IP:</span>{" "}
            <span className="text-foreground">{props.ipAddress}</span>
          </div> */}
          <div className="col-span-2">
            <span className="text-muted">Time:</span>{" "}
            <span className="text-foreground">{props.time} s</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
