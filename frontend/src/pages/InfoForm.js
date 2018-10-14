import React, { PureComponent } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class InfoForm extends PureComponent {
  state = {
    editorState: EditorState.createEmpty(),
  };
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          // toolbarClassName="toolbarClassName"
          // wrapperClassName="wrapperClassName"
          // editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        <button>SAVE</button>
      </div>
    );
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
}

export default InfoForm;
