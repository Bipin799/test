import  {
  TextField,
  InputAdornment,
} from "@mui/material";
import type { TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchInputProps = TextFieldProps & {
  placeholder?: string;
  iconPosition?: "start" | "end" | "none";
};

export default function SearchInput({
  placeholder = "Search",
  iconPosition = "start",
  ...rest
}: SearchInputProps) {
  const renderAdornment = () => {
    if (iconPosition === "none") return null;

    return (
      <InputAdornment position={iconPosition}>
        <SearchIcon color="action" />
      </InputAdornment>
    );
  };

  return (
    <TextField
     sx={{
        width: 320,
        "& .MuiOutlinedInput-root": {
          height: 44,
          borderRadius: "12px",
          backgroundColor: "#F8FAFC",
          boxShadow: "0px 1px 2px rgba(10, 13, 18, 0.08)",

          "& fieldset": {
            borderColor: "#D1D5DB",
          },

          "&:hover fieldset": {
            borderColor: "#D1D5DB",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#D1D5DB",
            borderWidth: "1px",
          },
        },

        "& .MuiOutlinedInput-input": {
          padding: "10px 12px",
          fontSize: "14px",
          lineHeight: "20px",
        },
      }}
      {...rest}
      placeholder={placeholder}
      InputProps={{
        ...(iconPosition === "start" && {
          startAdornment: renderAdornment(),
        }),
        ...(iconPosition === "end" && {
          endAdornment: renderAdornment(),
        }),
      }}
    />
  );
}