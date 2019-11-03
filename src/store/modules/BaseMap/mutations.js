import { loadModules } from 'esri-loader'
const mutations = {
    loadbasemap: (state) =>{
        loadModules([
            "esri/Map",
            "esri/views/MapView",
            "esri/layers/FeatureLayer",
            "esri/widgets/Track",
            "esri/widgets/Search",
        ],{
            url: "https://js.arcgis.com/4.11/",
          
        })
        .then(([
            Map,
            MapView,
            FeatureLayer,
            Track,
            Search

        ]) => {
            var map = new Map({
                basemap: 'osm'
            });

            var view = new MapView({
                map: map,
                container: "viewDiv",
                center: [106.366362, 10.360622],
                zoom: 14,
                popup: {
                    dockEnabled: false,
                    dockOptions: {
                        position: "bottom-right",
                        breakpoint: false,
                    },
                    highlightEnabled : true,
                },
                highlightOptions: {
                    color: [255, 255, 0, 1],
                    haloOpacity: 0.9,
                    fillOpacity: 0.2
                }
            });
            state.view = view

            var ubgpopuptemplate = {
                title: "Số hiệu: {SoHieu} - cây {MaTenCX}",
                content: [
                    {
                        type: "fields",
                        fieldInfos:[
                            {
                                fieldName: "SoHieu",
                                label: "Số Hiệu",
                            },
                            {
                                fieldName: "MaTenCX",
                                label: "Tên Cây",
                            },
                            {
                                fieldName: "KinhDo",
                                label: "Kinh Độ",
                            },
                            {
                                fieldName: "ViDo",
                                label: "Vĩ Độ",
                            },
                            {
                                fieldName: "DuongKinh",
                                lable: "Đường Kính",
                            },
                            {
                                fieldName: "ChieuCao",
                                lable: "Chiều Cao",
                            },
                            {
                                fieldName: "DoRongTan",
                                label: "Độ rộng tán",
                            },
                            {
                                fieldName: "NgayTrong",
                                label: "Ngày trồng cây",
                            },
                            {
                                fieldName: "ThuocTinh",
                                label: "Thuộc Tính",
                            },
                            {
                                fieldName: "GhiChu",
                                label: "Ghi Chú",
                            },
                            {
                                fieldName: "TuyenDuong",
                                label: "Tuyến Đường",
                            },
                            {
                                fieldName: "MaTinhTrang",
                                label: "Tình Trạng",
                            },
                            {
                                fieldName: "NguoiCapNhat",
                                label: "Người Cập Nhật",
                            },
                        ]
                    }
                ],
                actions: [
                    {
                        id: "updateInfor",
                        title: "Sửa Thông Tin Cây Xanh",
                        className: "esri-icon-edit"
                    },
                    {
                        id: "viewImage",
                        title: "Xem Hình Ảnh Của Cây",
                        className: "esri-icon-media",
                    },
                    {
                        id: "delTree",
                        title: "Xóa Cây",
                        className: "esri-icon-trash",
                    }
                ]
            }
            state.ubgpopupTemplate = ubgpopuptemplate

            var ubgFeatureLayer = new FeatureLayer({
                url: "https://tilis.vbgis.vn/arcgis/rest/services/DoThi/CayXanh/FeatureServer/0",
                // definitionExpression: "XoaBo = 0",
                title: "Cây Xanh", 
                objectIdField: "OBJECTID",
                outfields: ["*"],
                popupTemplate: ubgpopuptemplate
            });
            state.FeatureLayer = ubgFeatureLayer
            map.add(ubgFeatureLayer);

            var track = new Track({
                view: view
            });
            view.ui.add(track, "bottom-right");

            var ubg_searchwidget = new Search({
                view: view,
                sources: [
                    {
                        layer: ubgFeatureLayer,
                        searchFields: ["SoHieu", "MaTenCX"],
                        displayField: "SoHieu", 
                        placeholder: "Số hiệu, chủng loại",
                        exactMatch: false,
                        outFields: ["*"],
                        // maxResults: 10,
                        maxSuggestions: 2,
                        suggestionsEnabled: true,
                        minSuggestCharacters: 0,
                        searchAllEnabled: true,
                        suggestionTemplate: "Cây: {MaTenCX}- Số Hiệu: {SoHieu}",
                        name: "Tìm theo Tên hoặc Số Hiệu Của Cây Xanh",
                        resultSymbol: {
                            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                            color: [226, 119, 40],
                            outline: { // autocasts as new SimpleLineSymbol()
                                color: [255, 255, 255],
                                width: 2
                            }
                        }
                    }
                ]
            });
            view.ui.add(ubg_searchwidget, {
                position: "bottom-right",
                index: 2
            });

            ubg_searchwidget.includeDefaultSources = false;
            ubg_searchwidget.locationEnabled = false;

        });
    },
}

export default mutations;