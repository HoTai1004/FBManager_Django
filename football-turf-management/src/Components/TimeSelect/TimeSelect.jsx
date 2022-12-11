import Select from "react-select";

export const TimeSelect = ({ onChange }) => {
  return (
    <Select
      options={times}
      className="select"
      onChange={(c) => onChange(c.value)}
    // menuPortalTarget={document.body}
    // styles={{ menuPortal: (base) => ({ ...base, zIndex: 4 }) }}
    />
  );
};

const times = [
  { value: "7h00 am", label: "7h00 am" },
  { value: "8h00 am", label: "8h00 am" },
  { value: "8h30 am", label: "8h30 am" },
  { value: "9h00 am", label: "9h00 am" },
  { value: "9h30 am", label: "9h30 am" },
  { value: "10h00 am", label: "10h00 am" },
  { value: "10h30 am", label: "10h30 am" },
  { value: "13h00 pm", label: "13h00 pm" },
  { value: "13h30 pm", label: "13h30 pm" },
  { value: "14h00 pm", label: "14h00 pm" },
  { value: "14h30 pm", label: "14h30 pm" },
  { value: "15h00 pm", label: "15h00 pm" },
  { value: "15h30 pm", label: "15h30 pm" },
  { value: "16h00 pm", label: "16h00 pm" },
  { value: "16h30 pm", label: "16h30 pm" },
  { value: "17h00 pm", label: "17h00 pm" },
  { value: "17h30 pm", label: "17h30 pm" },
  { value: "18h00 pm", label: "18h00 pm" },
  { value: "18h30 pm", label: "18h30 pm" },
  { value: "19h00 pm", label: "19h00 pm" },
  { value: "19h30 pm", label: "19h30 pm" },
  { value: "20h00 pm", label: "20h00 pm" },
  { value: "20h30 pm", label: "20h30 pm" },
  { value: "21h00 pm", label: "21h00 pm" },
  { value: "21h30 pm", label: "21h30 pm" },
];