  
import React from "react";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <i class="material-icons brand-icon">fastfood</i> Food Recipe
      </h1>
      <div class="input-group w-50 mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div class="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;


/*import React from "react";

class Header = props => {
    const { search, onInputChange } = props;
        return (
            <div className="jumbotron">
                 <h1 className="display-1"> <span class="material-icons brand-icon">add_shopping_cart</span>Food Recipe</h1>
                 <div class="input-group w-50 mx-auto">
                <input type="text" class="form-control" placeholder="Search Your Recipe..." value={this.state.racipies}  />
                <button className="btn btn-dark">Search Recipe</button>
                 </div>
             </div>
         );
    }
     
};

export default Header;*/