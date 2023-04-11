const PropertiesBox = () => {
  return (
    <div class="card listing-preview">
        <img class="card-img-top" src="assets/img/homes/home-1.jpg" alt=""/>
        <div class="card-img-overlay">
        <h2>
            <span class="badge badge-secondary text-white">$490,000</span>
        </h2>
        </div>
        <div class="card-body">
        <div class="listing-heading text-center">
            <h4 class="text-primary">45 Drivewood Circle</h4>
            <p>
            <i class="fas fa-map-marker text-secondary"></i> Norwood MA, 02062</p>
        </div>
        <hr/>
        <div class="row py-2 text-secondary">
            <div class="col-6">
            <i class="fas fa-th-large"></i> Sqft: 2500</div>
            <div class="col-6">
            <i class="fas fa-car"></i> Garage: 2</div>
        </div>
        <div class="row py-2 text-secondary">
            <div class="col-6">
            <i class="fas fa-bed"></i> Bedrooms: 3</div>
            <div class="col-6">
            <i class="fas fa-bath"></i> Bathrooms: 2</div>
        </div>
        <hr/>
        <div class="row py-2 text-secondary">
            <div class="col-6">
            <i class="fas fa-user"></i> Kyle Brown</div>
        </div>
        <div class="row text-secondary pb-2">
            <div class="col-6">
            <i class="fas fa-clock"></i> 5 days ago</div>
        </div>
        <hr/>
        <a href="listing.html" class="btn btn-primary btn-block">More Info</a>
        </div>
    </div>
  )
}

export default PropertiesBox
