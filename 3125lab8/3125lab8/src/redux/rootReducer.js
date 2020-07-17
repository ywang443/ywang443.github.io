import {v4} from 'uuid';

const initialState = {
	apts: [
	    {
	        id: v4(),
	        name: "Byward Home",
					type: " 1 Bedroom + Den",
	        size: " 718 SQ.FT.",
	        consyear: "From 2002",
	        image: "s1.jpg",
	        bed_num: 1,
	        rent_month: 1350,
	        book_status: false,
	        description: {
	       		type: " 1 Bedroom + Den",
	          content: " Byward Home suites are spacious, bright, cozy and rich in architectural detail. Our suites offer you the very best in comfort and appeal with attractive granite countertops, solid maple cabinetry and central air conditioning for those warm summer nights."
	        }
	    },
	    {
	        id: v4(),
	        name: "Byward Home",
					type: " 1 Bedroom Penthouse",
	        size: " 910 SQ.FT.",
	        consyear: "From 2002",
	        image: "s2.jpg",
	        bed_num: 1,
	        rent_month: 1750,
	        book_status: false,
	        description: {
	          type: " 1 Bedroom Penthouse",
	          content: " Byward Home suites are spacious, bright, cozy and rich in architectural detail. Our suites offer you the very best in comfort and appeal with attractive granite countertops, solid maple cabinetry and central air conditioning for those warm summer nights."
	        }
	    },
	    {
	        id: v4(),
	        name: "Byward Home",
					type: " 2 Bedroom",
	        size: " 894 SQ.FT.",
	        consyear: "From 2002",
	        image: "s3.jpg",
	        bed_num: 2,
	        rent_month: 1650,
	        book_status: false,
	        description: {
	          type: " 2 Bedroom",
	          content: " Byward Home suites are spacious, bright, cozy and rich in architectural detail. Our suites offer you the very best in comfort and appeal with attractive granite countertops, solid maple cabinetry and central air conditioning for those warm summer nights."
	        }
	    },
	    {
	        id: v4(),
	        name: "Byward Home",
					type: " 2 Bedroom",
	        size: " 1058 SQ.FT.",
	        consyear: "From 2002",
	        image: "s4.jpg",
	        bed_num: 2,
	        rent_month: 1800,
	        book_status: false,
	        description: {
	          type: " 2 Bedroom",
	          content: " Byward Home suites are spacious, bright, cozy and rich in architectural detail. Our suites offer you the very best in comfort and appeal with attractive granite countertops, solid maple cabinetry and central air conditioning for those warm summer nights."
	        }
	    },
	    {
	        id: v4(),
	        name: "Riverside Home",
					type: " 2 Bedroom + Balcony",
	        size: " 979 SQ.FT.",
	        consyear: "From 2005",
	        image: "s5.jpg",
	        bed_num: 2,
	        rent_month: 1550,
	        book_status: false,
	        description: {
	          type: " 2 Bedroom + Balcony",
	          content: " Riverside Home suites are spacious, bright, cozy and rich in architectural detail. Our suites offer you the very best in comfort and appeal with attractive granite countertops, solid maple cabinetry and central air conditioning for those warm summer nights."
	        }
	    },
	    {
	        id: v4(),
	        name: "Riverside Home",
					type: " 2 Bedroom + Balcony",
	        size: " 921 SQ.FT.",
	        consyear: "From 2005",
	        image: "s6.jpg",
	        bed_num: 2,
	        rent_month: 1450,
	        book_status: false,
	        description: {
	          type: " 2 Bedroom + Balcony",
	          content: " Riverside Home suites are spacious, bright, cozy and rich in architectural detail. Our suites offer you the very best in comfort and appeal with attractive granite countertops, solid maple cabinetry and central air conditioning for those warm summer nights."
	        }
	    }
    ],

    show_apt: {},
    book_apt: {}
}





function rootReducer(state = initialState, action) {

	console.log("action: ", action);

	switch(action.type) {
		case "SHOW_APT": {
			return {
				...state,
				show_apt: {...action.payload.item}
			}
		}
		case "BOOK_APT": {
			return {
				...state,
				book_apt: {...action.payload.item}
			}
		}
		case "UPD_APT": {
			const arr = [...state.apts];
		    let index;
		    arr.forEach((ele,i)=>{
		      if(ele.id===action.payload.item.id){
		        index = i;
		      }
		    });
		    arr.splice(index, 1, action.payload.item);
		    const obj = {...state, apts: arr};
		    return obj;
		}
		default: return state;
	}
}

export default rootReducer;
