import PropertiesLogic from './PropertiesLogic';
import Spinner from '../../../components/common/spinner/Spinner'
import PropertiesBox from '../../../components/common/propertiesbox/PropertiesBox';
import CommonMessage from '../../../helper/messages/CommonMessage';
const Properties = () => {
  const {properties, loader} = PropertiesLogic();//Logic

  const {no_data_found} = CommonMessage;//Message
  return (
    <section id="listings" class="py-4">
    <div class="container">
      {loader && <Spinner/>}
        <div className="row">
          {
            properties.length>0 ?
            properties.map((property)=>(
              <div className="col-md-6 col-lg-4 mb-4" key={property._id}>
                {property && <PropertiesBox property={property}/>}
              </div>
            ))
             :
            <>
              {no_data_found}
            </>
          }
        </div>

      <div class="row">
        <div class="col-md-12">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#">&laquo;</a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">&raquo;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Properties
