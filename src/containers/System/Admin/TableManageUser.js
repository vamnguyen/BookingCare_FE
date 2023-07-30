import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import "./TableManageUser.scss";

// import MarkdownIt from "markdown-it";
// import MdEditor from "react-markdown-editor-lite";
// // import style manually
// import "react-markdown-editor-lite/lib/index.css";

// // Register plugins if required
// // MdEditor.use(YOUR_PLUGINS_HERE);

// // Initialize a markdown parser
// const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
// function handleEditorChange({ html, text }) {
//   console.log("handleEditorChange", html, text);
// }

class TableManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchUserRedux();
  }

  handleEditUser = (user) => {
    this.props.handleEditUserFromParent(user);
  };

  render() {
    const { users } = this.props;
    return (
      <>
        <table id="TableManageUser">
          <thead>
            <tr>
              <th>Email</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => {
                      this.handleEditUser(user);
                    }}
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => this.props.deleteUser(user.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <MdEditor
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        /> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => {
      dispatch(actions.getAllUserApi());
    },
    deleteUser: (id) => {
      dispatch(actions.deleteUserApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
