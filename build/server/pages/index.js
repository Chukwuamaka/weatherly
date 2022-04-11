(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(399);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(300);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(941);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__]);
swr__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





 // Pre-fetch list of countries and cities



const getStaticProps = async () => {
  const res = await fetch('https://countrycontinentlists.herokuapp.com/countries/all');
  const data = await res.json();
  return {
    props: {
      countryData: data.res
    }
  };
};

const fetcher = (...args) => fetch(...args).then(res => res.json());

function Home({
  countryData
}) {
  const {
    0: weatherCondition,
    1: setWeatherCondition
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);

  const updateWeatherCondition = condition => setWeatherCondition(condition); // Get image from Unsplash that matches the weather condition, then update background image


  const {
    data
  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])(weatherCondition ? `${"https://api.unsplash.com/search/photos?page=1&client_id=2W3PJAo3ARxzHF9x9lpEXTXQtqFb2N8WMvRyG7md7KA"}&query=${weatherCondition}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  const background = data ? `url(${data.results[0].urls.regular})` : 'brand.primary';
  return (
    /*#__PURE__*/
    // You can visit https://chakra-ui.com/ and https://nextjs.org/docs to understand the use cases
    // of the components that Chakra UI and Next.js provides respectively
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      background: background,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("title", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
          children: "Weatherly - A Weather Forecast App"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("meta", {
          name: "description",
          content: "A weather forecast app"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("link", {
          rel: "icon",
          href: "/favicon.ico"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("main", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
          spacing: 6,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            as: "h1",
            fontFamily: "cursive",
            fontSize: "160%",
            "data-testid": "app-title",
            children: "Weatherly"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_src_components_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            updateWeatherCondition: updateWeatherCondition,
            countryData: countryData
          })]
        })
      })]
    })
  );
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Card)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: external "react-spinners"
const external_react_spinners_namespaceObject = require("react-spinners");
;// CONCATENATED MODULE: ./services/default.service.js
const postRequest = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  });
};
const getRequest = url => {
  return fetch(url);
};
;// CONCATENATED MODULE: ./services/userlocation.service.js

const getUserLocation = (lat, long) => {
  return getRequest(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=81235eaee3b340a2a988ff1c474afde3`);
};
;// CONCATENATED MODULE: ./services/forecast.service.js

const getForecast = (city, days) => {
  return getRequest(`${"https://api.weatherapi.com/v1/forecast.json?key=3dc5e4cbaf234790811121935222903"}&q=${city}&days=${days}`);
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Dialog.js



function Dialog({
  isOpen,
  onClose,
  previousSearches,
  selectSearch
}) {
  return (
    /*#__PURE__*/
    // Display user's previous searches as a list in a dialog
    jsx_runtime_.jsx(react_.Modal, {
      isOpen: isOpen,
      onClose: onClose,
      isCentered: true,
      size: "lg",
      scrollBehavior: "inside",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.ModalOverlay, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ModalContent, {
          maxW: ['90vw', '70vw'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.ModalHeader, {
            fontSize: ['107%', '20px'],
            fontWeight: "bold",
            mb: 2,
            children: "Previous Searches"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.ModalBody, {
            p: 0,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
              spacing: 0,
              divider: /*#__PURE__*/jsx_runtime_.jsx(react_.Divider, {
                bgColor: "black",
                height: 0.3
              }),
              children: previousSearches.map((previousSearch, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                spacing: 2,
                p: 4,
                width: "100%",
                cursor: "pointer",
                fontSize: ['smaller', null, '97%'],
                bgColor: index % 2 === 0 ? 'gray.100' : 'inherit',
                onClick: () => selectSearch(previousSearch),
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
                  children: ["Continent: ", previousSearch.continent]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
                  children: ["Country: ", previousSearch.country]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
                  children: ["City: ", previousSearch.city]
                })]
              }, index + 1))
            })
          })]
        })
      })
    })
  );
}
;// CONCATENATED MODULE: ./src/components/Form.js
const _excluded = ["remember", "date"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function Form({
  updateForecast,
  countryData
}) {
  const {
    0: previousSearches,
    1: setPreviousSearches
  } = (0,external_react_.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,react_.useDisclosure)();
  const continents = ["Asia", "Africa", "Europe", "North America", "South America", "Oceania"];
  const {
    0: userLocation,
    1: setUserLocation
  } = (0,external_react_.useState)({
    loaded: false,
    coordinates: {
      lat: "",
      long: ""
    }
  }); // The weather api provides only current and future weather data up to 10 days
  // getDateRange returns the min. (current date) and max. (current date + 2) date values obtainable

  const getDateRange = () => {
    // Get current date and add a leading zero if the number of digits is less than 2
    const today = new Date().getDate();
    const currentDate = ('0' + today).slice(-2); // Get current month and add a leading zero if the number of digits is less than 2

    const currentMonth = ('0' + (new Date().getMonth() + 1)).slice(-2); // Get current year

    const currentYear = new Date().getFullYear(); // Get time epoch of max. date

    const future = new Date().setDate(today + 2); // Get max. date and month and add a leading zero if the number of digits is less than 2

    const futureDate = ('0' + new Date(future).getDate()).slice(-2);
    const futureMonth = ('0' + (new Date(future).getMonth() + 1)).slice(-2); // Get max. year

    const futureYear = new Date(future).getFullYear();
    return {
      min: `${currentYear}-${currentMonth}-${currentDate}`,
      max: `${futureYear}-${futureMonth}-${futureDate}`
    };
  }; // Form default values


  const {
    0: formData,
    1: setFormData
  } = (0,external_react_.useState)({
    continent: 'Africa',
    country: 'Nigeria',
    city: 'Ikeja',
    date: getDateRange().min,
    remember: false
  });

  const handleSelect = e => {
    const {
      name,
      value
    } = e.target;

    if (name === 'remember') {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        [name]: !formData.remember
      }));
    } // Open dialog with previous searches
    else if (name === 'usePrev' && value === 'yes') {
      onOpen();
      return;
    }

    return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [name]: value
    }));
  }; // Populate the form with data from a selected previous search and close the dialog


  const usePreviousSearch = args => {
    setFormData(_objectSpread(_objectSpread({}, formData), args));
    onClose();
  };

  (0,external_react_.useEffect)(() => {
    let isMounted = true;

    if (isMounted && false) {}

    return () => {
      isMounted = false;
    };
  }, []); // Get the longitude and latitude of user's current location

  (0,external_react_.useEffect)(() => {
    if (!("geolocation" in navigator)) {
      console.log("Geolocation not supported");
      setUserLocation({
        loaded: false
      });
    } else {
      navigator.geolocation.getCurrentPosition(location => setUserLocation({
        loaded: true,
        coordinates: {
          lat: location.coords.latitude,
          long: location.coords.longitude
        }
      }), error => {
        console.log(error);
        setUserLocation({
          loaded: false
        });
      });
    }
  }, []); // Reverse geocoding to get the user's actual location

  (0,external_react_.useEffect)(() => {
    if (userLocation.loaded) {
      getUserLocation(userLocation.coordinates.lat, userLocation.coordinates.long).then(response => response.json()).then(info => {
        // Set form's default location values to user's current location
        const {
          continent,
          country,
          county: city
        } = info.results[0].components;
        setFormData(prevData => _objectSpread(_objectSpread({}, prevData), {}, {
          continent,
          country,
          city
        }));
      }).catch(error => console.log(error));
    }
  }, [userLocation]);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const today = new Date().getDate(); // Get the difference between the current date and the date the user selected

    const difference = new Date().setDate(new Date(formData.date).getDate() - today);
    const days = formData.date === getDateRange().min ? 1 : new Date(difference).getDate() + 1;

    const success = data => {
      if (data.error) {
        return updateForecast({
          status: 'error',
          data: `Oops! ${data.error.message}`
        });
      } else {
        var _data$forecast, _data$forecast2, _data$forecast2$forec;

        const {
          remember,
          date
        } = formData,
              choices = _objectWithoutProperties(formData, _excluded); // Save search to localStorage if user checked the checkbox


        remember && localStorage.setItem('previousSearches', JSON.stringify([...previousSearches, choices]));
        const filter = (_data$forecast = data.forecast) === null || _data$forecast === void 0 ? void 0 : _data$forecast.forecastday.filter(day => day.date === formData.date);
        data.forecast.forecastday = filter;
        data.today = ((_data$forecast2 = data.forecast) === null || _data$forecast2 === void 0 ? void 0 : (_data$forecast2$forec = _data$forecast2.forecastday[0]) === null || _data$forecast2$forec === void 0 ? void 0 : _data$forecast2$forec.date) === getDateRange().min ? true : false;
        return updateForecast({
          status: 'success',
          data
        });
      }
    };

    getForecast(`${formData.city}, ${formData.country}`, days).then(res => res.json()).then(success).catch(err => updateForecast({
      status: 'error',
      data: "Oops! We couldn't fetch your data at the moment. Don't panic as the issue could be from our end. You can try a few more times and if the problem persists, please try again a little later."
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    "aria-label": "Provide weather forecast query data",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      textAlign: "center",
      color: "gray.500",
      fontSize: ['95%', null],
      px: 4,
      pb: 6,
      children: "Kindly fill out the form below so we can retrieve your data"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
      spacing: 2,
      fontSize: 18,
      maxW: "85%",
      margin: "auto",
      children: [// Display Select element only if user has previous searches saved
      previousSearches.length !== 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.FormControl, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Select, {
            "data-testid": "use-prev",
            name: "usePrev",
            placeholder: "Would you like to use a previously saved search?",
            color: "black",
            borderColor: "brand.primary",
            onChange: handleSelect,
            children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
              "data-testid": "use-prev-options",
              value: "yes",
              children: "Yes, please"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              "data-testid": "use-prev-options",
              value: "no",
              children: "No, maybe later"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Dialog, {
          isOpen: isOpen,
          onClose: onClose,
          previousSearches: previousSearches,
          selectSearch: usePreviousSearch
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
        spacing: [0, null, 3],
        w: "100%",
        flexWrap: ['wrap', null, 'nowrap'],
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.FormControl, {
          isRequired: true,
          mb: [2, 2, 0],
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.FormLabel, {
            htmlFor: "continent",
            color: "blackAlpha.700",
            mb: 1,
            fontSize: ['86%', null],
            children: "Continent"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Select, {
            id: "continent",
            name: "continent",
            value: formData.continent,
            placeholder: "Select Continent",
            color: "black",
            borderColor: "brand.primary",
            onChange: handleSelect,
            children: continents.map(continent => /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: continent,
              children: continent
            }, continent))
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.FormControl, {
          isRequired: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.FormLabel, {
            htmlFor: "country",
            color: "blackAlpha.700",
            mb: 1,
            fontSize: ['86%', null],
            children: "Country"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Select, {
            id: "country",
            name: "country",
            value: formData.country,
            placeholder: "Select Country",
            color: "black",
            borderColor: "brand.primary",
            onChange: handleSelect,
            children: // Display countries that match the selected continent
            countryData && countryData.filter(item => item.continent === formData.continent).map((country, index) => /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: country.country,
              children: country.country
            }, country.country + index))
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
        spacing: [0, null, 3],
        w: "100%",
        flexWrap: ['wrap', null, 'nowrap'],
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.FormControl, {
          isRequired: true,
          mb: [2, 2, 0],
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.FormLabel, {
            htmlFor: "city",
            color: "blackAlpha.700",
            mb: 1,
            fontSize: ['86%', null],
            children: "City"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Select, {
            id: "city",
            name: "city",
            value: formData.city,
            placeholder: "Select City",
            color: "black",
            borderColor: "brand.primary",
            onChange: handleSelect,
            children: // Display cities that match the selected country
            countryData && countryData.filter(item => item.country === formData.country)[0].cities.map((city, index) => /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: city,
              children: city
            }, city + index))
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.FormControl, {
          isRequired: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.FormLabel, {
            htmlFor: "date",
            color: "blackAlpha.700",
            mb: 1,
            fontSize: ['86%', null],
            children: "Date"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Input, {
            id: "date",
            type: "date",
            name: "date",
            value: formData.date,
            min: getDateRange().min,
            max: getDateRange().max,
            placeholder: "Select Date",
            borderColor: "brand.primary",
            onChange: handleSelect
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.FormControl, {
        textAlign: "center",
        color: "blackAlpha.700",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Checkbox, {
          name: "remember",
          size: "sm",
          mt: 5,
          mb: 1,
          onChange: handleSelect,
          children: "Remember this search"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
        type: "submit",
        isLoading: loading,
        loadingText: "Fetching Data",
        bgColor: "brand.primary",
        color: "white",
        _hover: {
          bgColor: 'brand.primary'
        },
        spinner: /*#__PURE__*/jsx_runtime_.jsx(external_react_spinners_namespaceObject.BeatLoader, {
          size: 8,
          color: "white"
        }),
        spinnerPlacement: "end",
        children: "Check Forecast"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./styles/Card.module.css
var Card_module = __webpack_require__(488);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./src/components/Forecast.js
function Forecast_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Forecast_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Forecast_ownKeys(Object(source), true).forEach(function (key) { Forecast_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Forecast_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Forecast_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Forecast({
  forecast
}) {
  var _forecast$data, _forecast$data$locati, _forecast$data2, _forecast$data2$locat, _forecast$data3, _forecast$data3$locat, _forecast$data4, _forecast$data4$locat, _forecast$data5, _forecast$data5$locat, _forecast$data6, _forecast$data7, _forecast$data7$curre, _forecast$data8, _forecast$data8$curre, _forecast$data9, _forecast$data9$curre, _forecast$data9$curre2, _forecast$data10, _forecast$data10$curr, _forecast$data10$curr2, _forecast$data11, _forecast$data11$curr, _forecast$data11$curr2, _forecast$data12, _forecast$data12$curr, _forecast$data13, _forecast$data13$curr, _forecast$data14, _forecast$data14$curr, _forecast$data15, _forecast$data15$curr, _forecast$data16, _forecast$data16$curr, _forecast$data17, _forecast$data17$curr, _forecast$data18, _forecast$data18$curr, _forecast$data19, _forecast$data19$curr, _forecast$data20, _forecast$data20$curr, _forecast$data21, _forecast$data21$fore, _forecast$data21$fore2, _forecast$data21$fore3, _forecast$data22, _forecast$data22$fore, _forecast$data22$fore2, _forecast$data22$fore3, _forecast$data23, _forecast$data23$fore, _forecast$data23$fore2, _forecast$data23$fore3, _forecast$data23$fore4, _forecast$data24, _forecast$data24$fore, _forecast$data24$fore2, _forecast$data24$fore3, _forecast$data24$fore4, _forecast$data25, _forecast$data25$fore, _forecast$data25$fore2, _forecast$data25$fore3, _forecast$data25$fore4, _forecast$data26, _forecast$data26$fore, _forecast$data26$fore2, _forecast$data26$fore3, _forecast$data27, _forecast$data27$fore, _forecast$data27$fore2, _forecast$data27$fore3, _forecast$data28, _forecast$data28$fore, _forecast$data28$fore2, _forecast$data28$fore3, _forecast$data29, _forecast$data29$fore, _forecast$data29$fore2, _forecast$data29$fore3, _forecast$data30, _forecast$data30$fore, _forecast$data30$fore2, _forecast$data30$fore3;

  const {
    0: units,
    1: setUnits
  } = (0,external_react_.useState)({
    temp: 'c',
    wind_speed: 'mph',
    pressure: 'mb',
    precipitation: 'mm'
  }); // Convert current units of quantities to alternate units

  const changeUnit = (e, unit1, unit2) => {
    const id = e.target.id; // Compare current unit with alternate unit to determine the destination unit for the conversion

    const compare = () => units[id] === unit1 ? unit2 : unit1;

    setUnits(Forecast_objectSpread(Forecast_objectSpread({}, units), {}, {
      [id]: compare()
    }));
  };

  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    px: [3, 5],
    "data-testid": "forecast-mounted",
    children: !forecast || forecast.status === 'error' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
      spacing: 1,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: "/sad_face.svg",
        width: 80,
        height: 80,
        alt: "Sad Face Icon"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        textAlign: "center",
        fontSize: "110%",
        children: forecast ? forecast.data : 'No results to show'
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
      spacing: 2,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
        spacing: 2,
        justifyContent: "center",
        mb: 4,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          textAlign: "center",
          color: "gray.500",
          children: "Here are your results"
        }), /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: "/thumbs_up.svg",
          width: 40,
          height: 40,
          alt: ""
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
        textAlign: "center",
        fontSize: ['93%', '110%'],
        children: ["Location: ", (_forecast$data = forecast.data) === null || _forecast$data === void 0 ? void 0 : (_forecast$data$locati = _forecast$data.location) === null || _forecast$data$locati === void 0 ? void 0 : _forecast$data$locati.name, ", ", (_forecast$data2 = forecast.data) === null || _forecast$data2 === void 0 ? void 0 : (_forecast$data2$locat = _forecast$data2.location) === null || _forecast$data2$locat === void 0 ? void 0 : _forecast$data2$locat.region, ", ", (_forecast$data3 = forecast.data) === null || _forecast$data3 === void 0 ? void 0 : (_forecast$data3$locat = _forecast$data3.location) === null || _forecast$data3$locat === void 0 ? void 0 : _forecast$data3$locat.country]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
        spacing: 2,
        justifyContent: "center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
          fontSize: ['93%', '110%'],
          children: ["Latitude: ", (_forecast$data4 = forecast.data) === null || _forecast$data4 === void 0 ? void 0 : (_forecast$data4$locat = _forecast$data4.location) === null || _forecast$data4$locat === void 0 ? void 0 : _forecast$data4$locat.lat, "\xB0"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
          fontSize: ['93%', '110%'],
          children: ["Longitude: ", (_forecast$data5 = forecast.data) === null || _forecast$data5 === void 0 ? void 0 : (_forecast$data5$locat = _forecast$data5.location) === null || _forecast$data5$locat === void 0 ? void 0 : _forecast$data5$locat.lon, "\xB0"]
        })]
      }), forecast.data.today || ((_forecast$data6 = forecast.data) === null || _forecast$data6 === void 0 ? void 0 : _forecast$data6.forecast.forecastday.length) === 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 2,
          justifyContent: "center",
          wrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            fontSize: ['93%', '110%'],
            children: ["Temperature: ", units.temp === 'c' ? `${(_forecast$data7 = forecast.data) === null || _forecast$data7 === void 0 ? void 0 : (_forecast$data7$curre = _forecast$data7.current) === null || _forecast$data7$curre === void 0 ? void 0 : _forecast$data7$curre.temp_c}°C` : `${(_forecast$data8 = forecast.data) === null || _forecast$data8 === void 0 ? void 0 : (_forecast$data8$curre = _forecast$data8.current) === null || _forecast$data8$curre === void 0 ? void 0 : _forecast$data8$curre.temp_f}°F`]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
            id: "temp",
            type: "button",
            size: "xs",
            color: "whiteAlpha.900",
            bgColor: "brand.primary",
            _hover: {
              color: 'black',
              bgColor: 'gray.200'
            },
            onClick: e => changeUnit(e, 'f', 'c'),
            children: ["Convert to ", units.temp === 'c' ? 'Farenheit' : 'Celsius']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          justifyContent: "center",
          wrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            textAlign: "center",
            fontSize: ['93%', '110%'],
            mr: 1,
            children: ["Weather Condition: ", (_forecast$data9 = forecast.data) === null || _forecast$data9 === void 0 ? void 0 : (_forecast$data9$curre = _forecast$data9.current) === null || _forecast$data9$curre === void 0 ? void 0 : (_forecast$data9$curre2 = _forecast$data9$curre.condition) === null || _forecast$data9$curre2 === void 0 ? void 0 : _forecast$data9$curre2.text]
          }), /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
            src: `https:${(_forecast$data10 = forecast.data) === null || _forecast$data10 === void 0 ? void 0 : (_forecast$data10$curr = _forecast$data10.current) === null || _forecast$data10$curr === void 0 ? void 0 : (_forecast$data10$curr2 = _forecast$data10$curr.condition) === null || _forecast$data10$curr2 === void 0 ? void 0 : _forecast$data10$curr2.icon}`,
            width: 30,
            height: 30,
            alt: (_forecast$data11 = forecast.data) === null || _forecast$data11 === void 0 ? void 0 : (_forecast$data11$curr = _forecast$data11.current) === null || _forecast$data11$curr === void 0 ? void 0 : (_forecast$data11$curr2 = _forecast$data11$curr.condition) === null || _forecast$data11$curr2 === void 0 ? void 0 : _forecast$data11$curr2.text
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 2,
          justifyContent: "center",
          wrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            fontSize: ['93%', '110%'],
            children: ["Wind Speed: ", units.wind_speed === 'mph' ? `${(_forecast$data12 = forecast.data) === null || _forecast$data12 === void 0 ? void 0 : (_forecast$data12$curr = _forecast$data12.current) === null || _forecast$data12$curr === void 0 ? void 0 : _forecast$data12$curr.wind_mph} mph` : `${(_forecast$data13 = forecast.data) === null || _forecast$data13 === void 0 ? void 0 : (_forecast$data13$curr = _forecast$data13.current) === null || _forecast$data13$curr === void 0 ? void 0 : _forecast$data13$curr.wind_kph} kph`]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
            id: "wind_speed",
            type: "button",
            size: "xs",
            color: "whiteAlpha.900",
            bgColor: "brand.primary",
            _hover: {
              color: 'black',
              bgColor: 'gray.200'
            },
            onClick: e => changeUnit(e, 'mph', 'kph'),
            children: ["Convert to ", units.wind_speed === 'mph' ? 'Kph' : 'Mph']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
          fontSize: ['93%', '110%'],
          children: ["Wind Direction: ", (_forecast$data14 = forecast.data) === null || _forecast$data14 === void 0 ? void 0 : (_forecast$data14$curr = _forecast$data14.current) === null || _forecast$data14$curr === void 0 ? void 0 : _forecast$data14$curr.wind_degree, "\xB0 ", (_forecast$data15 = forecast.data) === null || _forecast$data15 === void 0 ? void 0 : (_forecast$data15$curr = _forecast$data15.current) === null || _forecast$data15$curr === void 0 ? void 0 : _forecast$data15$curr.wind_dir]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 2,
          justifyContent: "center",
          wrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            fontSize: ['93%', '110%'],
            children: ["Pressure: ", units.pressure === 'mb' ? `${(_forecast$data16 = forecast.data) === null || _forecast$data16 === void 0 ? void 0 : (_forecast$data16$curr = _forecast$data16.current) === null || _forecast$data16$curr === void 0 ? void 0 : _forecast$data16$curr.pressure_mb} mb` : `${(_forecast$data17 = forecast.data) === null || _forecast$data17 === void 0 ? void 0 : (_forecast$data17$curr = _forecast$data17.current) === null || _forecast$data17$curr === void 0 ? void 0 : _forecast$data17$curr.pressure_in} in`]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
            id: "pressure",
            type: "button",
            size: "xs",
            color: "whiteAlpha.900",
            bgColor: "brand.primary",
            _hover: {
              color: 'black',
              bgColor: 'gray.200'
            },
            onClick: e => changeUnit(e, 'mb', 'in'),
            children: ["Convert to ", units.pressure === 'mb' ? 'in' : 'mb']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 2,
          justifyContent: "center",
          wrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            fontSize: ['93%', '110%'],
            children: ["Precipitation: ", units.precipitation === 'mm' ? `${(_forecast$data18 = forecast.data) === null || _forecast$data18 === void 0 ? void 0 : (_forecast$data18$curr = _forecast$data18.current) === null || _forecast$data18$curr === void 0 ? void 0 : _forecast$data18$curr.precip_mm} mm` : `${(_forecast$data19 = forecast.data) === null || _forecast$data19 === void 0 ? void 0 : (_forecast$data19$curr = _forecast$data19.current) === null || _forecast$data19$curr === void 0 ? void 0 : _forecast$data19$curr.precip_in} in`]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
            id: "precipitation",
            type: "button",
            size: "xs",
            color: "whiteAlpha.900",
            bgColor: "brand.primary",
            _hover: {
              color: 'black',
              bgColor: 'gray.200'
            },
            onClick: e => changeUnit(e, 'mm', 'in'),
            children: ["Convert to ", units.precipitation === 'mm' ? 'in' : 'mm']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
          fontSize: ['93%', '110%'],
          children: ["Humidity: ", (_forecast$data20 = forecast.data) === null || _forecast$data20 === void 0 ? void 0 : (_forecast$data20$curr = _forecast$data20.current) === null || _forecast$data20$curr === void 0 ? void 0 : _forecast$data20$curr.humidity]
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 2,
          justifyContent: "center",
          wrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            fontSize: ['93%', '110%'],
            children: ["Avg. Temperature: ", units.temp === 'c' ? `${(_forecast$data21 = forecast.data) === null || _forecast$data21 === void 0 ? void 0 : (_forecast$data21$fore = _forecast$data21.forecast) === null || _forecast$data21$fore === void 0 ? void 0 : (_forecast$data21$fore2 = _forecast$data21$fore.forecastday[0]) === null || _forecast$data21$fore2 === void 0 ? void 0 : (_forecast$data21$fore3 = _forecast$data21$fore2.day) === null || _forecast$data21$fore3 === void 0 ? void 0 : _forecast$data21$fore3.avgtemp_c}°C` : `${(_forecast$data22 = forecast.data) === null || _forecast$data22 === void 0 ? void 0 : (_forecast$data22$fore = _forecast$data22.forecast) === null || _forecast$data22$fore === void 0 ? void 0 : (_forecast$data22$fore2 = _forecast$data22$fore.forecastday[0]) === null || _forecast$data22$fore2 === void 0 ? void 0 : (_forecast$data22$fore3 = _forecast$data22$fore2.day) === null || _forecast$data22$fore3 === void 0 ? void 0 : _forecast$data22$fore3.avgtemp_f}°F`]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
            id: "temp",
            type: "button",
            size: "xs",
            color: "whiteAlpha.900",
            bgColor: "brand.primary",
            _hover: {
              color: 'black',
              bgColor: 'gray.200'
            },
            onClick: e => changeUnit(e, 'f', 'c'),
            children: ["Convert to ", units.temp === 'c' ? 'Farenheit' : 'Celsius']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          justifyContent: "center",
          wrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            fontSize: ['93%', '110%'],
            textAlign: "center",
            mr: 1,
            children: ["Weather Condition: ", (_forecast$data23 = forecast.data) === null || _forecast$data23 === void 0 ? void 0 : (_forecast$data23$fore = _forecast$data23.forecast) === null || _forecast$data23$fore === void 0 ? void 0 : (_forecast$data23$fore2 = _forecast$data23$fore.forecastday[0]) === null || _forecast$data23$fore2 === void 0 ? void 0 : (_forecast$data23$fore3 = _forecast$data23$fore2.day) === null || _forecast$data23$fore3 === void 0 ? void 0 : (_forecast$data23$fore4 = _forecast$data23$fore3.condition) === null || _forecast$data23$fore4 === void 0 ? void 0 : _forecast$data23$fore4.text]
          }), /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
            src: `https:${(_forecast$data24 = forecast.data) === null || _forecast$data24 === void 0 ? void 0 : (_forecast$data24$fore = _forecast$data24.forecast) === null || _forecast$data24$fore === void 0 ? void 0 : (_forecast$data24$fore2 = _forecast$data24$fore.forecastday[0]) === null || _forecast$data24$fore2 === void 0 ? void 0 : (_forecast$data24$fore3 = _forecast$data24$fore2.day) === null || _forecast$data24$fore3 === void 0 ? void 0 : (_forecast$data24$fore4 = _forecast$data24$fore3.condition) === null || _forecast$data24$fore4 === void 0 ? void 0 : _forecast$data24$fore4.icon}`,
            width: 30,
            height: 30,
            alt: (_forecast$data25 = forecast.data) === null || _forecast$data25 === void 0 ? void 0 : (_forecast$data25$fore = _forecast$data25.forecast) === null || _forecast$data25$fore === void 0 ? void 0 : (_forecast$data25$fore2 = _forecast$data25$fore.forecastday[0]) === null || _forecast$data25$fore2 === void 0 ? void 0 : (_forecast$data25$fore3 = _forecast$data25$fore2.day) === null || _forecast$data25$fore3 === void 0 ? void 0 : (_forecast$data25$fore4 = _forecast$data25$fore3.condition) === null || _forecast$data25$fore4 === void 0 ? void 0 : _forecast$data25$fore4.text
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 2,
          justifyContent: "center",
          wrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            fontSize: ['93%', '110%'],
            children: ["Max. Wind Speed: ", units.wind_speed === 'mph' ? `${(_forecast$data26 = forecast.data) === null || _forecast$data26 === void 0 ? void 0 : (_forecast$data26$fore = _forecast$data26.forecast) === null || _forecast$data26$fore === void 0 ? void 0 : (_forecast$data26$fore2 = _forecast$data26$fore.forecastday[0]) === null || _forecast$data26$fore2 === void 0 ? void 0 : (_forecast$data26$fore3 = _forecast$data26$fore2.day) === null || _forecast$data26$fore3 === void 0 ? void 0 : _forecast$data26$fore3.maxwind_mph} mph` : `${(_forecast$data27 = forecast.data) === null || _forecast$data27 === void 0 ? void 0 : (_forecast$data27$fore = _forecast$data27.forecast) === null || _forecast$data27$fore === void 0 ? void 0 : (_forecast$data27$fore2 = _forecast$data27$fore.forecastday[0]) === null || _forecast$data27$fore2 === void 0 ? void 0 : (_forecast$data27$fore3 = _forecast$data27$fore2.day) === null || _forecast$data27$fore3 === void 0 ? void 0 : _forecast$data27$fore3.maxwind_kph} kph`]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
            id: "wind_speed",
            type: "button",
            size: "xs",
            color: "whiteAlpha.900",
            bgColor: "brand.primary",
            _hover: {
              color: 'black',
              bgColor: 'gray.200'
            },
            onClick: e => changeUnit(e, 'mph', 'kph'),
            children: ["Convert to ", units.wind_speed === 'mph' ? 'Kph' : 'Mph']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 2,
          justifyContent: "center",
          wrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            fontSize: ['93%', '110%'],
            children: ["Tot. Precipitation: ", units.precipitation === 'mm' ? `${(_forecast$data28 = forecast.data) === null || _forecast$data28 === void 0 ? void 0 : (_forecast$data28$fore = _forecast$data28.forecast) === null || _forecast$data28$fore === void 0 ? void 0 : (_forecast$data28$fore2 = _forecast$data28$fore.forecastday[0]) === null || _forecast$data28$fore2 === void 0 ? void 0 : (_forecast$data28$fore3 = _forecast$data28$fore2.day) === null || _forecast$data28$fore3 === void 0 ? void 0 : _forecast$data28$fore3.totalprecip_mm} mm` : `${(_forecast$data29 = forecast.data) === null || _forecast$data29 === void 0 ? void 0 : (_forecast$data29$fore = _forecast$data29.forecast) === null || _forecast$data29$fore === void 0 ? void 0 : (_forecast$data29$fore2 = _forecast$data29$fore.forecastday[0]) === null || _forecast$data29$fore2 === void 0 ? void 0 : (_forecast$data29$fore3 = _forecast$data29$fore2.day) === null || _forecast$data29$fore3 === void 0 ? void 0 : _forecast$data29$fore3.totalprecip_in} in`]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
            id: "precipitation",
            type: "button",
            size: "xs",
            color: "whiteAlpha.900",
            bgColor: "brand.primary",
            _hover: {
              color: 'black',
              bgColor: 'gray.200'
            },
            onClick: e => changeUnit(e, 'mm', 'in'),
            children: ["Convert to ", units.precipitation === 'mm' ? 'in' : 'mm']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
          fontSize: ['93%', '110%'],
          children: ["Avg. Humidity: ", (_forecast$data30 = forecast.data) === null || _forecast$data30 === void 0 ? void 0 : (_forecast$data30$fore = _forecast$data30.forecast) === null || _forecast$data30$fore === void 0 ? void 0 : (_forecast$data30$fore2 = _forecast$data30$fore.forecastday[0]) === null || _forecast$data30$fore2 === void 0 ? void 0 : (_forecast$data30$fore3 = _forecast$data30$fore2.day) === null || _forecast$data30$fore3 === void 0 ? void 0 : _forecast$data30$fore3.avghumidity]
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Card.js








function Card({
  updateWeatherCondition,
  countryData
}) {
  const {
    0: activeSection,
    1: setActiveSection
  } = (0,external_react_.useState)('data'); // Change active section between Data and Forecast

  const changeActiveSection = e => {
    const textContent = e.target.textContent.toLowerCase();
    activeSection !== textContent && setActiveSection(textContent);
  };

  const {
    0: forecast,
    1: setForecast
  } = (0,external_react_.useState)(null);

  const updateForecast = data => {
    var _data$data, _data$data2, _data$data2$current, _data$data2$current$c, _data$data3, _data$data3$forecast, _data$data3$forecast$, _data$data3$forecast$2, _data$data3$forecast$3;

    // Supply forecast data to display results in Forecast component
    setForecast(data); // Automatically open Forecast section when forecast data is available

    setActiveSection('forecast'); // Supply weather condition data to index.js to load the corresponding image from Unsplash

    if ((_data$data = data.data) !== null && _data$data !== void 0 && _data$data.today) updateWeatherCondition((_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : (_data$data2$current = _data$data2.current) === null || _data$data2$current === void 0 ? void 0 : (_data$data2$current$c = _data$data2$current.condition) === null || _data$data2$current$c === void 0 ? void 0 : _data$data2$current$c.text);else updateWeatherCondition((_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : (_data$data3$forecast = _data$data3.forecast) === null || _data$data3$forecast === void 0 ? void 0 : (_data$data3$forecast$ = _data$data3$forecast.forecastday[0]) === null || _data$data3$forecast$ === void 0 ? void 0 : (_data$data3$forecast$2 = _data$data3$forecast$.day) === null || _data$data3$forecast$2 === void 0 ? void 0 : (_data$data3$forecast$3 = _data$data3$forecast$2.condition) === null || _data$data3$forecast$3 === void 0 ? void 0 : _data$data3$forecast$3.text);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    rounded: 12,
    bg: "white",
    w: ['85vw', '70vw', '60vw'],
    pb: 10,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
      spacing: 0,
      mb: 10,
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        "data-testid": "data-section-heading",
        className: external_classnames_default()({
          [(Card_module_default()).sectionHeading]: true,
          [(Card_module_default()).activeSection]: activeSection === 'data'
        }),
        flex: 1,
        fontWeight: "semibold",
        borderRadius: "12px 0 0",
        pl: 5,
        color: "blackAlpha.700",
        onClick: changeActiveSection,
        children: "Data"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        "data-testid": "forecast-section-heading",
        className: external_classnames_default()({
          [(Card_module_default()).sectionHeading]: true,
          [(Card_module_default()).activeSection]: activeSection === 'forecast'
        }),
        flex: 1,
        fontWeight: "semibold",
        borderRadius: "0 12px 0 0",
        pr: 5,
        color: "blackAlpha.700",
        onClick: changeActiveSection,
        children: "Forecast"
      })]
    }), // Dynamically display the content of the Card component based on the active section
    activeSection === 'data' ? /*#__PURE__*/jsx_runtime_.jsx(Form, {
      updateForecast: updateForecast,
      countryData: countryData
    }) : /*#__PURE__*/jsx_runtime_.jsx(Forecast, {
      forecast: forecast
    })]
  });
}

/***/ }),

/***/ 488:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionHeading": "Card_sectionHeading__4CbYx",
	"activeSection": "Card_activeSection__vmkyZ"
};


/***/ }),

/***/ 399:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__nLjiQ",
	"title": "Home_title__T09hD"
};


/***/ }),

/***/ 930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(265)));
module.exports = __webpack_exports__;

})();