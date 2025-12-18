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
