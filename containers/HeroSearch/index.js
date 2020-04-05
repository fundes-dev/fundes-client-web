import { useState, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import MaterialAutoComplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Router from 'next/router';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import { requestPackageSuggestions } from '../../services';
import useDebounce from './useDebounce';


const StyledContainer = styled('div')({
  backgroundColor: '#BBB',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const FormContainer = styled('form')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '400px',
});

const StyledButton = styled(Button)({
  marginLeft: '20px',
});

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [loading, setLoading] = useState(false);

  const debouncedSearchString = useDebounce(searchString, 200);

  useEffect(() => {
    const fetchOptions = async (string) => {
      try {
        setLoading(true);
        const packages = await requestPackageSuggestions(string);

        const packageNames = packages.body
          .sort((a, b) => b.score.detail.popularity - a.score.detail.popularity)
          .map((p) => p.package.name);
        setOptions(packageNames);
        setLoading(false);
      } catch (e) {
        setOptions([]);
        setLoading(false);
        // TODO Implement a universal error handling logic
      }
    };
    if (debouncedSearchString && !loading) {
      fetchOptions(debouncedSearchString);
    }
  }, [debouncedSearchString]);

  return (
    <StyledContainer>
      <FormContainer>
        <MaterialAutoComplete
          id="npm packages"
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          getOptionSelected={(option, value) => option === value}
          getOptionLabel={(option) => option}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search For An NPM Package"
              variant="outlined"
              onChange={(e) => { setSearchString(e.target.value); }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
        <StyledButton
          variant="contained"
          color="primary"
          disabled={!options.includes(searchString)}
          onClick={(e) => {
            e.preventDefault();
            Router.push(`/packages/${searchString}`);
          }}
          size="large"
        >
          Search
        </StyledButton>
      </FormContainer>
    </StyledContainer>
  );
};

export default Hero;
