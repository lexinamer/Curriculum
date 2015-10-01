var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<form className="new-job-form" onSubmit={this.onFormSubmitted}>
					<h1>Post your job</h1>
					<label>
						<div>Title</div>
						<input type="text" ref="title" />
					</label>
					<label>
						<div>Company Name</div>
						<input type="text" ref="company" />
					</label>
					<label>
						<div>Location</div>
						<input type="text" ref="location" />
					</label>
					<label>
						<div>Description</div>
						<textarea ref="description"></textarea>
					</label>
					<label>
						<div>Tags</div>
						<input type="text" ref="tags" />
					</label>
					<button>Submit Job</button>
				</form>
				<div className="instructions">
					<div className="side-box">
						<h3>Tips for your job posting</h3>
						
						<p><strong>Add Keywords</strong> because the majority of candidates search for available positions using keywords, make sure you use all relevant keywords in your posting.</p>

						<p><strong>Use Familiar Job Titles.</strong> Use specific but familiar job titles in your postings. Make sure the titles are clear and succinct.</p>

						<p><strong>Give Them Details.</strong> The purpose of posting a job is to spark a candidate's interest in the available position. When job postings have detailed descriptions, candidates tend to apply to them more.</p>

						<p><strong>Expand Your Location.</strong> Do not limit your job posting to a restricted area around the job's location. Make sure to include surrounding cities and metropolitan areas in your searches.</p>

						<p><strong>Discuss Compensation.</strong> Even though you may not want to give an exact compensation, give a range. Make sure to point out any bonuses, commissions, or non-monetary compensation, as well.</p>
					</div>
				</div>
			</section>
		);
	},
	onFormSubmitted: function(e) {
		e.preventDefault();
		var newJob = this.props.jobs.add({
			title: this.refs.title.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			location: this.refs.location.getDOMNode().value,
			company: this.refs.company.getDOMNode().value,
		});
		this.props.router.navigate('details/'+newJob.cid, {trigger: true});
	}
});