import React, { Component } from 'react'

export default class FooterComponent extends Component {
  render() {
    return (
      <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 text-center">
                    <p>2017 - Innopolis HCI</p>

                    <p>made with <i className="fa fa-heart"></i> by
                        <a target="_blank" href="http://hikester.me/"> Rinat Khatipov</a> | Designed with help
                        <a target="_blank" href="http://denef.de/"> Sebastian Denef</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
  }
}
