/* 
 * Simple Notebook component that takes placeholder text as a prop 
 */
import * as React from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import { CardContent, Card, Box, Container, Typography } from "@mui/material";
import "./Notebook.css";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { purple } from "@mui/material/colors";
class Notebook extends React.Component {
  constructor(props) {
    super(props)
    this.state = { NotebookHtml: '', theme: 'snow' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(html) {
    this.setState({ NotebookHtml: html });
  }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }

  render() {
    return (
      <Box sx={{ backgroundColor: "white", p: 2, m: 2, fontSize: 24 }}>
        <Box
          sx={{
            backgroundColor: purple[500],
            borderRadius: '15px',
            mt: -5,
            pt: 1,
            pb: 1,
          }}
        >
          <Container maxWidth="xl">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="white"
              gutterBottom
            >
              Notebook
            </Typography>
          </Container>
        </Box>
        <Card>
          <CardContent>
      <div>
              <ReactQuill 
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.NotebookHtml}
          modules={Notebook.modules}
          formats={Notebook.formats}
                bounds={'.app'}
          placeholder={this.props.placeholder}
        />
        <div className="themeSwitcher">
          <label>Theme </label>
                <select onChange={(e) =>
                  this.handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    )
  }
}

/* 
 * Quill modules to attach to Notebook
 * See https://quilljs.com/docs/modules/ for complete options
 */
Notebook.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill Notebook formats
 * See https://quilljs.com/docs/formats/
 */
Notebook.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/* 
 * PropType validation
 */
Notebook.propTypes = {
  placeholder: PropTypes.string,
}

export default Notebook;