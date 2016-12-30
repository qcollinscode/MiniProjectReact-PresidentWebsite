import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import PresidentsMenu from './PresidentMenu';
import presidents from '../data/presidents';
import Events from './Events';
import InfoHead from './InfoHead';
import InfoBody from './InfoBody';

export default class PresidentPage extends React.Component {
	render() {
		const id = this.props.params.id;
		const president = presidents.filter((president) => president.id === id)[0];
		if(!president) {
			return <NotFoundPage />;
		}
		const headerStyle = { backgroundImage: `url(../assets/img/${president.cover})` };
		return (
			<div className="president-full row">
				<div className="president">
					<div className="row">
						<header className="header-img" style={headerStyle} />
					</div>
					<div className="row">
					<div className="col-lg-12">
					<section className="col-lg-12 info-events">
					<div className="picture-container col-lg-12">
						<div className="row">
							<div className="img-container col-lg-4">
								<img className="" src={`../assets/img/${president.image}`}/>
							</div>
							<div className="txt-container col-lg-8">
								<h2 className="name">{president.name}</h2>
								<span className="title">{president.title}</span>
								<span className="office">{president.office}</span>
							</div>
						</div>
					</div>
					<div className="row">
					<div className="col-lg-12">
					<div className="row">
						<div className="row">
						<InfoHead president={president} />
						</div>
						<div className="row">
						<InfoBody president={president} />
						</div>
						<ul>{
							president.events.map((event, i) => <Events key={i} {...event} />)
						}
						</ul>
					<div className="col-lg-12 description">
						Find out more on <a href={president.link} target="_blank">Wikipedia</a>
					</div>
					</div>
					</div>
					</div>
					</section>
					</div>
					</div>
				</div>
				<div className=" col-lg-12 navigateBack">
					<Link to=""> Back to Home</Link>
				</div>
			</div>
		);
	}
}