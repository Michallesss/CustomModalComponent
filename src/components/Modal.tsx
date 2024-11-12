import { Component } from 'react';
import './modal.css';

interface ModalProps {
  children: React.ReactNode;
}

interface ModalState {
  isOpen: boolean;
}

export default class Modal extends Component<ModalProps> {
  state: ModalState = {
    isOpen: true,
  }
  
  constructor(props: ModalProps) {
    super(props);
  }

  disable = () => {
    this.setState({ isOpen: false });
  }

  static Header({ title }: { title: string; }) {
    return (
      <div className="modal-header">
        <h2>{title}</h2>
        {/* <button onClick={this.disable}>X</button> */}
      </div>
    );
  }

  static Content({ children }: { children: React.ReactNode; }) {
    return (
      <div className="modal-body">
        {children}
      </div>
    );
  }

  static Footer({ callToActionLabel }: { callToActionLabel: string; }) {
    return (
      <div className="modal-footer">
        <button onClick={() => alert(callToActionLabel)}>click me</button>
      </div>
    );
  }

  render() {
    return (
      <div className="modal-background">
        {this.state.isOpen && (
          <div>
            <button onClick={this.disable}>X</button>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}