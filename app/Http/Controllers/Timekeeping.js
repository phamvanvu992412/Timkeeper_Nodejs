

export const 
post_iclock_data = async (req, res) => {
    const device_serial = req.query.SN
    console.log(req.body)
    // if (req.body) {
    //     const data = req.body.trim().split('\n')
     
    //     for(let i =0;i<data.length;i++){
    //         const detail_data = data[i].split('\t')
    //         if (Array.isArray(detail_data)) {
    //             if (detail_data[0].includes('OPLOG 1')) {
    //             } else if (detail_data[0].includes('OPLOG 2')) {
    //             } else if (detail_data[0].includes('OPLOG 3')) {
    //             } else if (detail_data[0].includes('OPLOG 4')) {
    //                 await update_old_timekeeping(detail_data, device_serial)
    //             } else if (detail_data[0].includes('OPLOG 5')) {
    //             } else if (detail_data[0].includes('OPLOG 6')) {
    //             } else if (detail_data[0].includes('OPLOG 7')) {
    //             } else if (detail_data[0].includes('OPLOG 8')) {
    //             } else if (detail_data[0].includes('OPLOG 9')) {
    //                 await delete_user_timekeeper(detail_data, device_serial)
    //                 //console.log("Xóa dữ liệu người dùng")
    //             } else if (detail_data[0].includes('USER')) {
    //                 await insert_new_user_timekeeper(detail_data, device_serial)
    //                 // console.log("Dữ liệu đăng ký người dùng mới")
    //             } else if (detail_data[0].includes('FP')) {
    //                 await update_valid_fingerprint_user_timekeeper(detail_data, device_serial)
    //                 // console.log("Dữ liệu dấu vân tay")
    //             } else if (validator.isNumber(parseInt(detail_data[0])) && !detail_data[0].includes('OPLOG')) {
    //                 const user_id = detail_data[0]
    //                 await insert_timekeeping(detail_data, device_serial)
    //             }
    //         }
    //     }
    // }
    res.send('OK')
}

export const get_config = async (req, res) => {

    const SN = req.query.SN
    // if (SN) {
    //     await ModelTimekeeper.updateOne(
    //         { serial: SN },
    //         {
    //             $setOnInsert: {
    //                 serial: SN,
    //             },
    //         },
    //         { upsert: true }
    //     )
    // }
    const config = `GET OPTION FROM: ${SN}\tATTLOGStamp=None\tOPERLOGStamp=99999999\tATTPHOTOStamp=None\tErrorDelay=30\tDelay=20\tTransTimes=00:00;14:05\tTransinterval=1\tTransFlag=1111000000\tTimeZone=7\tRealtime=1\tEncrypt=None`
    res.set('Content-Type', 'text/plain')
    res.send(config)
}


export const get_request = async (req, res) => {
    const serial = req.query.SN

    // if(flag == 1 && serial == '3113224360294'){
    //     flag ++
    //     console.log("ok")
    //     return res.send('C:1:DATA USER PIN=1\tName=ABC')
    // }
    // if(serial){
    //     const async_insert = await ModelDataAsyncTemporary.find({$and:[
    //         {insert:false},
    //         {device_serial:serial}
    //     ]})

    //     if(async_insert.length > 0){ // phải chạy insert trước
    //         console.log("serial = ",serial)
    //         let command = ''
    //         for (let i = 0; i < async_insert.length; i++) {
    //             command += `C:${i + 1}:DATA USER PIN=${async_insert[i].code}\tName=${async_insert[i].name}\tCard=${async_insert[i].card}\tPasswd=${async_insert[i].passwd}\tPri=${async_insert[i].pri}\r\n`
    //         }
    //         await ModelDataAsyncTemporary.updateMany({$and:[{insert:false},{serial:serial}]},{$set:{insert:true}})

    //         res.set('Content-Type', 'text/plain');
    //         return res.send(`${command}`)
    //     } else {
    //         const async_update = await ModelDataAsyncTemporary.find({ $and: [{ update: false }, { insert: true }, { serial: serial }] })
    //         if (async_update.length > 0) {
    //             let command = ''
    //             for (let i = 0; i < async_update.length; i++) {
       
    //                 for (let j = 0; j < async_update[i].fingerprint.length; j++) {
    //                     command += `C:${i + 1}:DATA FP PIN=${async_update[i].code}\tFID=${async_update[i].fingerprint[j].fid}\tSize=${async_update[i].fingerprint[j].size}\tValid=${async_update[i].fingerprint[j].valid}\tTMP=${async_update[i].fingerprint[j].valid_tmp}\r\n`
    //                 }
    //             }
    //             await ModelDataAsyncTemporary.deleteMany({ $and: [{ update: false }, { serial: serial }] })
    //             console.log('đã update vân tay')
    //             console.log(command)
    //             res.set('Content-Type', 'text/plain')
    //             return res.send(command)
    //         }
    //     }
    // }

    // if(flag==1){
    //     flag++
    //     res.send(`
    //     C:1:USER PIN=2\tName=PhamTi\n
    //     C:2:DATA FP PIN=1\tFID=6\tSize=1088\tValid=1\tTMP=Sm1TUzIxAAADLjEECAUHCc7QAAAbL2kBAAAAg9MYmi43AG8PcgCaAFAhzgBgAI8PgAB1LtQPmwCEAI8PSi6HAFEPqQBIABMhywCNAJUPZgCMLjYPXACQAI8Pdy6iAD8PqwB+AK8hxQC7AKIPJgDKLpkOpADQAFsPeS7TAJsNzQAfAI4jmQDeAJYPmwDjLuQNTADkABQOoC7yAIkPVAAxAPMg1QABAYEOkAAIL/sPcx4v45YnmK+CCk8KNv+Kg1hp4ITOjZuFmBROEj605XxFCY4V5/QIyHJ8boSvYrElPSrx7EqmDPlRItt13vR/pOL1IjzUDioaYfrTFPEjTA96+XfvhAmy2CcVVrj2BCP/2tmr7C4OyfncDnnSFBXx9opMGOGqw+fapfa67Sb8Pg9kDtH6uvZK+cjFRA4+KlIXrYbNDi4BAe0ZMMoAnjt8jmZwwMIH/gQuwRkMNkIJxXAYRcDBe48FAJQgVNOCCQCVNnAHwMHvwFYYAQRQYYPDW4XDfG9yO88BB3Omg8DBiQrFmyRTkoN4CwDMm5OWjm0EAHBjVr4TAipuscRqi8MFwcCicRoA/XCnu4zC7cKEwInAYgXAOCsBQ3pWwW7IAJmpUcPDxMPBB//D78X/BgBFiJN4wicBqoj9+v06wMKrBgBLiUz/BWgLLsmJnsTHyASpBi6oikOjCQBujhPSW8CVGQEDS7GA78HBw8Ggwgd/fe/+OAgAWJOJXPwdBwCskyT/BIIELl+USWhJF8X+l4dmccKfw8IHbmXu/AoAopc3UMDCVQ4AhZvJ/jv//9X8/f/9YsHfAP6LqMDAeJ/CZoDC7cTBwsDBi8AAh4g7xJIEAHFiQ8LrBwB3p0DCAIkWLwPBmjjA/gfDx+jCwsTBqYzIAGHO9v39W8P/BlAGLp3gDMDB/sEAWM1hVwQA2+nGaQQuVvDr/fz+B8AOLtH+g0k3wQGLBz7/AH1SChAVBX7RU0LEDRD1yX3D7sFGwv5+DtVFFCfF/mB0Yv7JEOkKe//+w/7COMBzJRHlL3o6wIdgCj7JN33AwMCPwQU+3jl0/0YE1WdALWxSQgALQ8QAAyVEUg==
    //     `)
    //     console.log("Cập nhật vân tay")
    // }
    // else res.send('OK')
    res.set('Content-Type', 'text/plain')
    return res.send('OK')
}
export const result_requet = async (req, res) => {
    console.log('Kết quả = ', req.body)
    res.set('Content-Type', 'text/plain');
    res.send('OK')
}


// export const render_view_list_timekeeper = async (req, res) => {
//     try {
//         const header = _headerURL(req)
//         const search = req.query.search
//         let query = {}
//         if (validator.isDefine(search)) {
//             query = {
//                 $or: [{ name: { $regex: '.*' + search + '.*', $options: 'i' } }, { serial: { $regex: '.*' + search + '.*', $options: 'i' } }],
//             }
//         }
//         const branch_id = req.query.branch_id
//         if (branch_id && validator.ObjectId.isValid(branch_id)) {
//             query = {
//                 ...query,
//                 branch_id: validator.ObjectId(branch_id),
//             }
//         }
//         const data = await ModelTimekeeper.find(query).skip(validator.getOffset(req)).limit(validator.getLimit(req)).populate('data_branch')
//         const count = await ModelTimekeeper.countDocuments(query)
//         const html_branch = await _htmlBranch({},branch_id)
  
//         return res.render('admin/timekeeping/timekeeper/index', { data, count, length: data.length, ...header, html_branch })
//     } catch (e) {
//         console.error(e)
//         return res.status(400).send(`Thất bại! Có lỗi xảy ra`)
//     }
// }

// export const render_view_list_timekeeper_add = async (req, res) => {
//     try {
//         const html_branch = await _htmlBranch()
//         const header_url = _headerURL(req)
//         return  res.render('admin/timekeeping/timekeeper/add', { html_branch, ...header_url })
       
//     } catch (e) {
//         console.error(e)
//         return res.status(400).send(`Thất bại! Có lỗi xảy ra`)
//     }
// }

// export const render_view_edit_list_timekeeper = async (req, res) => {
//     try {
//         const device_id = req.params.device_id
//         if (!device_id || !validator.ObjectId.isValid(device_id)) return res.status(400).send(`Thất bại! Không tìm thấy thông tin thiết bị`)

//         const data = await ModelTimekeeper.findById(device_id)
//         if (!data) return res.status(400).send(`Thất bại! Không tìm thấy thông tin thiết bị`)
//         const html_branch = await _htmlBranch({},data.branch_id)
//         const header_url = _headerURL(req)
//         return res.render('admin/timekeeping/timekeeper/edit', { html_branch, ...header_url, data })
       
//     } catch (e) {
//         console.error(e)
//         return res.status(400).send(`Thất bại! Có lỗi xảy ra`)
//     }
// }
// export const edit_timekeer = async (req, res) => {
//     try {
//         const device_id = req.params.device_id
//         const { serial, name, branch_id, ip, port ,time_zone} = req.body
//         if (!device_id || !validator.ObjectId.isValid(device_id)) return res.status(400).send(`Thất bại! Không tìm thấy thiết bị`)
//         const data = await ModelTimekeeper.findById(device_id)
//         if (!data) return res.status(500).send(`Thất bại! Có lỗi xảy ra`)
//         const data_insert = await ModelTimekeeper.findByIdAndUpdate(data._id, {
//             name: name.trim(),
//             branch_id: validator.ObjectId(branch_id),
//             port: validator.tryParseInt(port),
//             ip: ip,
//             time_zone:validator.tryParseInt(time_zone)
//         })

//         req.session.success = `Cập nhật thành công`
//         return res.redirect('/admin/timekeeping/list-timekeeper')
//     } catch (e) {
//         console.error(e)
//         return res.status(500).send(`Có lỗi xảy ra`)
//     }
// }

// export const test_connect_timekeeper = async (req, res) => {
//     try {
//         const port = validator.tryParseInt(req.query.port)
//         const ip = req.query.ip

//         const zk = new ZKLib(ip, port, 10000, 4000)

//         try {
//             const data = await zk.createSocket()
//             await zk.disconnect()
//             return res.status(200).send(`Kết nối thành công`)
//         } catch (e) {
//             console.error(e)
//             return res.status(400).send(`Kết nối thất bại! Không tìm thấy thiết bị`)
//         }
//     } catch (e) {
//         console.error(e)
//         return res.status(400).send(`Thất bại! Có lỗi xảy ra`)
//     }
// }

// export const insert_timekeer = async (req, res) => {
//     try {
//         const { serial, name, branch_id } = req.body
//         const data = await ModelTimekeeper.findOne({ serial: serial.trim() })
//         if (data) {
//             req.session.error = `Số serial đã tồn tại`
//             return res.redirect('/admin/timekeeping/list-timekeeper/add')
//         }
//         const data_insert = await new ModelTimekeeper({
//             serial: serial.trim(),
//             name: name.trim(),
//             branch_id: validator.ObjectId(branch_id),
//         }).save()

//         req.session.success = `Thêm mới thành công`
//         return res.redirect('/admin/timekeeping/list-timekeeper')
//     } catch (e) {
//         console.error(e)
//         return res.status(500).send(`Có lỗi xảy ra`)
//     }
// }

// export const render_view_user_timekeeper_data = async (req, res) => {
//     try {
//         const header_url = _headerURL(req)
//         const html_is_updated = get_html_is_updated(req.query.is_updated || -1)
//         const html_timekeeper = await _htmlTimekeeper(req.query.device_serial)
//         const data = await get_data_user_timekeeper(req, res)
    
//         return res.render('admin/timekeeping/usertimekeeper/index', { ...header_url, html_is_updated, ...data, html_timekeeper })
      
//     } catch (e) {
//         console.error(e)
//         return res.status(500).send(`Có lỗi xảy ra`)
//     }
// }

// const get_html_is_updated = (is_updated) => {
//     const array_des = ['Tất cả', 'Đã cập nhật', 'Chưa cập nhật']
//     const array_value = [-1, 1, 0]

//     let html = ''
//     for (let i = 0; i < array_des.length; i++) {
//         const is_selected = array_value[i] == validator.tryParseInt(is_updated) ? 'selected' : ''
//         html += `<option ${is_selected} value="${array_value[i]}">${array_des[i]}</option>`
//     }
//     return html
// }

// export const get_data_user_timekeeper = async (req, res) => {
//     try {
//         let query = {}
//         const search = req.query.search
//         if (validator.isDefine(search)) {
//             query = {
//                 ...query,
//                 $or: [{ 'code': { $regex: '.*' + search + '.*', $options: 'i' } }, { 'name': { $regex: '.*' + search + '.*', $options: 'i' } }, { 'users.nickname': { $regex: '.*' + search + '.*', $options: 'i' } }],
//             }
//         }
//         const device_serial = req.query.device_serial
//         if (device_serial) {
//             query = {
//                 ...query,
//                 device_serial: device_serial,
//             }
//         }
//         let query_updateted = {}

//         const count_device = await ModelTimekeeper.estimatedDocumentCount()

//         const is_updated = req.query.is_updated
//         if (is_updated == 1) {
//             query_updateted = {
//                 count_async: count_device,
//             }
//         } else if (is_updated == 0) {
//             query_updateted = {
//                 count_async: { $ne: count_device },
//             }
//         }
//         const data = await ModelUsertimekeeper.aggregate([
//             {
//                 $lookup: {
//                     from: 'users',
//                     localField: 'code',
//                     foreignField: 'ID',
//                     as: 'users',
//                 },
//             },
//             {
//                 $unwind: {
//                     path: '$uses',
//                     preserveNullAndEmptyArrays: true,
//                 },
//             },
//             {
//                 $match: query,
//             },
//             {
//                 $group: {
//                     _id: '$code',
//                     count_async: { $sum: 1 },
//                     name: { $first: '$name' },
//                     card: { $first: '$card' },
//                     fingerprint: { $first: '$fingerprint' },
//                     passwd: { $first: '$passwd' },
//                     users: { $first: '$users' },
//                     createdAt: { $first: '$createdAt' },
//                 },
//             },
//             {
//                 $match: query_updateted,
//             },
//             {
//                 $sort: {
//                     createdAt: -1,
//                 },
//             },
//             {
//                 $skip: validator.getOffset(req),
//             },
//             {
//                 $limit: validator.getLimit(req),
//             },
//         ])

//         const count = await ModelUsertimekeeper.aggregate([
//             {
//                 $lookup: {
//                     from: 'users',
//                     localField: 'code',
//                     foreignField: 'ID',
//                     as: 'users',
//                 },
//             },
//             {
//                 $unwind: {
//                     path: '$uses',
//                     preserveNullAndEmptyArrays: true,
//                 },
//             },
//             {
//                 $match: query,
//             },
//             {
//                 $group: {
//                     _id: '$code',
//                     count_async: { $sum: 1 },
//                 },
//             },
//             {
//                 $match: query_updateted,
//             },
//             {
//                 $count: 'count',
//             },
//         ])

//         for (let i = 0; i < data.length; i++) {
//             data[i].part_id = null
//             data[i].part_name = ''
//             data[i].nickname = null

//             if (data[i].users && data[i].users.length == 1) {
//                 data[i].nickname = data[i].users[0].nickname
//                 if (data[i].users[0].part_id) {
//                     const data_part = await ModelPart.findById(data[i].users[0].part_id)
//                     if (data_part) {
//                         data[i].part_id = data_part._id
//                         data[i].part_name = data_part.name
//                     }
//                 }
//                 delete data[i].users
//             }
//         }
      
//         return {
//             data: data,
//             count: count.length > 0 ? count[0].count : 0,
//             length: data.length,
//             count_device: count_device,
//         }
//     } catch (e) {
//         console.error(e)
//         return null
//     }
// }

// export const update_user_timekeeper_joint_user = async (req, res) => {
//     try {
//         const _id = req.body._id
//         const user_ID = req.body.user_ID

//         if (!_id || !validator.ObjectId.isValid(_id)) return res.status(400).send(`Thất bại! Không tìm thấy nhân viên`)
//         const data_user_timekeeper = await ModelUsertimekeeper.findById(_id)
//         if (!data_user_timekeeper) return res.status(400).send(`Thất bại! Không tìm thấy nhân viên`)

//         if (!validator.isDefine(user_ID)) return res.status(400).send(`Thất bại! Không tìm thấy nhân viên có mã ${user_ID}`)
//         const data_user = await ModelUser.findOne({ ID: user_ID.trim() })
//         if (!data_user) return res.status(400).send(`Thất bại! Không tìm thấy nhân viên có mã ${user_ID}`)

//         await ModelUsertimekeeper.updateOne(
//             { _id: data_user_timekeeper._id },
//             {
//                 $set: {
//                     user_id: data_user._id,
//                 },
//             }
//         )

//         return res.json(data_user)
//     } catch (e) {
//         console.error(e)
//         return res.status(500).send(`Thất bại! Có lỗi xảy ra`)
//     }
// }

// export const render_view_report_timekeeping_daily = async (req, res) => {
//     try {
//         const header_url = _headerURL(req)
//         const html_branch = _htmlBranch({}, req.query.branch_id)
//         const html_timekeeper = await _htmlTimekeeper(req.query.device_serial)
//         const data = await get_data_daily_timekeeping(req, res)
//         return res.render('admin/timekeeping/report/daily', { ...header_url, html_branch, ...data, html_timekeeper })
    
//     } catch (e) {
//         console.error(e)
//         return res.status(500).send(`Có lỗi xảy ra`)
//     }
// }
// const get_data_daily_timekeeping = async (req, res) => {
//     try {
//         const search = req.query.search
//         const branch_id = req.query.branch_id

//         return {
//             data: [],
//             count: 0,
//             length: 0,
//         }
//     } catch (e) {
//         console.error(e)
//         return null
//     }
// }

// const get_list_device = async (query = {}) => {
//     const data = await ModelTimekeeper.find(query)
//     return data
// }

// // const test = async () => {

// //     const zk = new ZKLib('192.168.1.11', 4370, 10000, 4000);

// //     try {
// //         // Create socket to machine
// //         await zk.createSocket()
// //     } catch (e) {
// //         console.log(e)
// //         if (e.code === 'EADDRINUSE') {
// //         }
// //     }

// //     // await zk.enableDevice();
// //     const user = {
// //         privilege: 0, // quyền truy cập, mặc định là 0
// //         password: '', // mật khẩu, để trống nếu không cần thiết
// //         enabled: true, // trạng thái kích hoạt, mặc định là true
// //         name: 'VU', // tên người dùng
// //         id: '3', // mã người dùng
// //         card: '', // số thẻ, để trống nếu không cần thiết
// //         fingerPrint: [ // danh sách mẫu vân tay
// //         //   { fingerId: 1, template: 'Mẫu vân tay 1' },
// //         //   { fingerId: 2, template: 'Mẫu vân tay 2' }
// //         ],
// //         face: '', // mẫu khuôn mặt, để trống nếu không cần thiết
// //         timezone: 0, // múi giờ, mặc định là 0
// //         group: '', // nhóm người dùng, để trống nếu không cần thiết
// //         userExtFmt: '', // định dạng thông tin mở rộng của người dùng
// //         userExt: '' // thông tin mở rộng của người dùng
// //       };

// //         zk.setUser(8, '10', 'vk', '111', 0, 0).then(result => {
// //             console.log('Thêm người dùng mới thành công ', result);
// //         })
// //         .catch(error => {
// //                 console.log('Thêm người dùng mới thất bại', error);
// //         });

// //     await zk.disconnect()

// //     return null

// // }

// // export const excute_cmd = async (req, res) =>{
// //     try{
// //         const data = await test()
// //         return res.json(data)
// //     }
// //     catch(e){
// //         console.log("Có lỗi: ",e)
// //         return res.status(500).send(`ok`)
// //     }
// // }

// export const asyn_data_fingerprint = async (req, res) => {
//     try {
//         const device_id = req.params.device_id
//         const data_device = await ModelTimekeeper.findById(device_id)
//         if (!data_device) return res.status(400).send(`Không tìm thấy thiết bị`)
//         const data_user = await ModelUsertimekeeper.find({ device_serial: data_device.serial })
//         const other_device = await ModelTimekeeper.find({ _id: { $ne: data_device._id } })
//         let count_async = 0
//         for(let i =0;i<data_user.length;i++){
//             for(let j =0;j<other_device.length;j++){
//                 const count_user = await ModelUsertimekeeper.countDocuments({$and:[{device_serial:other_device[j].serial},{code:data_user[i].code}]})
//                 delete data_user[i]._id
//                 await new ModelDataAsyncTemporary({
//                     ...data_user[i],
//                     device_serial:other_device[j].serial,
//                     insert:false,
//                     update:false
//                 }).save()
//                 if(count_user == 0){
//                     await new ModelUsertimekeeper({
//                         ...data_user[i],
//                         device_serial: other_device[j].serial,
//                     }).save()
//                     count_async++
//                 }
//             }
//         }
//         return res.json(`Đã tìm thấy ${count_async} dữ liệu vân tay cần đồng bộ! Đồng bộ sẽ mất khoảng 1 - 2 phút`)
//     } catch (e) {
//         console.log('Có lỗi: ', e)
//         return res.status(500).send(`Có lỗi xảy ra`)
//     }
// }

// export const render_view_report_daily = async (req, res) => {
//     try {
//         const header = _headerURL(req)
//         const html_branch = await _htmlBranch(null, header.branch_id)
//         const html_part = await _htmlPart(header.part_id)
//         if (!new Date(req.query.date)) {
//             req.query.date = header.todate
//         }
//         const date = req.query.date
//         const data = await get_data_daily(req, res)
//         if (!data) return res.status(400).send(`Có lỗi xảy ra`)
    
//         return res.render('admin/timekeeping/report/daily', { ...data, ...header,date, html_branch, html_part })
//     } catch (e) {
//         console.log('Có lỗi: ', e)
//         return res.status(500).send(`Có lỗi xảy ra`)
//     }
// }

// export const get_data_daily = async (req, res) => {
  
//     const header = _headerURL(req)
//     const date = req.query.date || header.todate
//     const search = req.query.search

//     let query = {}
//     if (validator.isDefine(search)) {
//         query = {
//             ...query,
//             $or:[
//                 {ID: { $regex: '.*' + search + '.*', $options: 'i' }},
//                 {nickname: { $regex: '.*' + search + '.*', $options: 'i' }},
//             ]
//         }
//     }
//     const branch_id = req.query.branch_id
//     const part_id = req.query.part_id
//     if (branch_id && validator.ObjectId.isValid(branch_id)) {
//         query = {
//             ...query,
//             branch_id: validator.ObjectId(branch_id),
//         }
//     }
//     if (part_id && validator.ObjectId.isValid(part_id)) {
//         query = {
//             ...query,
//             part_id: validator.ObjectId(part_id),
//         }
//     }

//     const data = await ModelUser.find(query, { _id: 1, ID: 1, nickname: 1 ,part_id:1,branch_id:1}).skip(validator.getOffset(req)).limit(validator.getLimit(req))
//     const count = await ModelUser.countDocuments(query)
//     for (let i = 0; i < data.length; i++) {
//         const report = await get_time_keeping_one_date(date, data[i]._id)
//         data[i] = {
//             ...data[i],
//             ...report
//         }
//     }


//     return {
//         data: data,
//         count: count,
//         length: data.length,
//     }
// }

// // const dm = new Date('2023-07-09 10:35:00')
// // console.log('dm = ',dm)
// // const dm_pre4 = new Date(dm.setHours(dm.getHours()-4))
// // console.log({
// //     dm_pre4:dm_pre4,
// //     dm:dm.getHours()
// // })
// const get_time_keeping_one_date = async (date, user_id) =>{
//     const query_xx = {
//         // tìm lịch làm việc cá nhân của thằng đó
//         fromDate: { $lte: validator.startOfDay(date) },
//         toDate: { $gte: validator.endOfDay(date) },
//         user_id: validator.ObjectId(user_id),
//     }
//     const user = await ModelUser.findById(user_id)
//     const data = {
//         timeIn_scheule:null,
//         timeOut_scheule:null,
//         check_next_day:null,
//         time_in:null,
//         time_out:null,
//         string_time_in:null,
//         string_time_out:null,
//         type_schedule:null,
//         branch_id:user.branch_id,
//         part_id:user.part_id,
//         workday:0
//     }
   
//     const is_furlough = await check_is_furlough_day_of_user(user_id, date) // kiểm tra nghỉ phép
//     data.is_furlough = is_furlough
//     if(is_furlough){
//         return data
//     }

//     const is_time_off = await ModelScheduleTimeOff.check_time_off_by_date(user_id, date)
//     data.is_time_off = is_time_off
//     if(is_time_off){
//         return data
//     }
//     const schedule_by_emplyee = await ScheduleWorkUser.modelSchema.findOne(query_xx).sort({ fromDate: -1 }) // tìm lịch cá nhân
//     if (schedule_by_emplyee) {
//         // nếu có giờ làm việc cá nhân
//         data.timeIn_scheule = schedule_by_emplyee.timeIn
//         data.timeOut_scheule = schedule_by_emplyee.timeOut
//         data.check_next_day = schedule_by_emplyee.isNextDay
//         data.type_schedule = "Lịch làm việc cá nhân"
//     } else { //â
//         // còn lại tìm kiếm theo bộ phận
//         // tìm được hôm đó nó thuộc bộ phận và khu vực nào
//         //1. tìm xem trong thời gian này a ta đã chuyển chính chưa
//         const data_tranfer_position = await SchedulePositionTranfer.modelSchema.findOne({
//             $and:[
//                 {statusApproved:1},// trạng thái phê duyệt 1 => Đơn đã được duyệt
//                 {user_id:validator.ObjectId(user._id)},
//                 {dateRequest:{$gt: new Date(date)}} // ngày chuyển phải lớn hơn hoặc bằng ngày hiện cần tìm, ví dụ ngày 10 yêu cầu -> ngày 9 sẽ là bộ phận cũ ,10 là bộ phận mới
//             ]
//         }).sort({dateRequest:1}) 

//         if(data_tranfer_position){ // nếu có chuyển chính
//             data.branch_id = data_tranfer_position.branch_id, // gán lại chi nhánh và bộ phận trước đó
//             data.part_id = data_tranfer_position.previousPart_id
//         }
//         if (data.part_id && data.branch_id) {
//             // đã tìm được bộ phận và khu vực
//             const schedule_by_part = await ScheduleWork.modelSchema
//                 .findOne({
//                     // tìm lịch làm việc theo bộ phận
//                     $and:[
//                         {fromDate: { $lte: validator.startOfDay(date) }},
//                         {toDate: { $gte: validator.endOfDay(date) }},
//                         {part_id: validator.ObjectId(data.part_id)},
//                         {branch_id: validator.ObjectId(data.branch_id)},
//                     ]

             
//                 })
//                 .sort({ fromDate: -1 })

//             if (schedule_by_part) {
//                 // nếu tìm được
//                 data.timeIn_scheule = schedule_by_part.timeIn
//                 data.timeOut_scheule = schedule_by_part.timeOut
//                 data.check_next_day = schedule_by_part.isNextDay
//                 data.type_schedule = "Lịch làm việc theo bộ phận"
//             }
//         } 
//     }
//     // bắt đầu tìm thời gian chấm công theo lịch
//     // nếu ngày hôm đó có lịch đã
//     if(data.timeIn_scheule){
//         // tìm xem có lưu chỉnh sửa xong
//         const new_date = new Date(date)
//         const data_edit = await ModelEditTimekeeping.findOne({
//             $and:[
//                 {user_id:validator.ObjectId(user_id)},
//                 {date:new_date.getDate()},
//                 {month:new_date.getMonth()+1},
//                 {year:new_date.getFullYear()}
//             ]
//         })
//         if(data_edit){
//             data.time_in = data_edit.time_in
//             data.string_time_in = validator.format_date(data_edit.time_in,"HH:mm")
//             data.time_out = data_edit.time_out
//             data.string_time_out = validator.format_date(data_edit.time_out,"HH:mm")
//         }
//         else{
//             // tìm thời gian chấm công trong khoảng 4h đó
//             const date_time_in = new Date(`${date} ${data.timeIn_scheule}`) // giờ chấm công
//             // ta sẽ tìm giờ chấm công cùng ngày của người này nằm trong khoảng 4h so với giờ checkin
//             const time_in_previous_four_hours = new Date(date_time_in.setHours(date_time_in.getHours()-4)) //trước 4 tiếng so với giờ vào
//             const time_in_after_four_hours = new Date(date_time_in.setHours(date_time_in.getHours()+8)) // sau 4 tiếng

//             const data_timekeeping_checkin = await ModelTimekeeping.findOne({
//                 $and:[
//                     {time:{$gte:time_in_previous_four_hours}},
//                     {time:{$lte:time_in_after_four_hours}},      
//                     {code:user.ID}       
//                 ]
//             }).sort({time:-1})
           
//             if(data_timekeeping_checkin){ // => tìm đc thời gian checkin
//                 data.time_in = data_timekeeping_checkin.time
//                 data.string_time_in = validator.format_date(data_timekeeping_checkin.time,"HH:mm")
//             }

//             // bắt đầu tìm kiếm timeout
//             const date_time_out = new Date(`${date} ${data.timeOut_scheule}`) // giờ chấm công
//             if(data.check_next_day){ // nếu lịch làm việc đến ngày hôm sau thì cộng thêm 1 ngày nữa
//                 date_time_out.setDate(date_time_out.getDate()+1)
//             }
//             // ta sẽ tìm giờ chấm công cùng ngày của người này nằm trong khoảng 4h so với giờ checkin
//             const time_out_previous_four_hours = new Date(date_time_out.setHours(date_time_out.getHours()-4)) //trước 4 tiếng so với giờ vào
//             const time_out_after_four_hours = new Date(date_time_out.setHours(date_time_out.getHours()+8)) // sau 4 tiếng

//             const data_timekeeping_checkout = await ModelTimekeeping.findOne({
//                 $and:[
//                     {time:{$gte:time_out_previous_four_hours}},
//                     {time:{$lte:time_out_after_four_hours}},    
//                     {code:user.ID}          
//                 ]
//             }).sort({time:-1})

//             if(data_timekeeping_checkout){ // => tìm đc thời gian checkin
//                 data.time_out = data_timekeeping_checkout.time
//                 data.string_time_out = validator.format_date(data_timekeeping_checkout.time,"HH:mm")
//             }
//         }
       
//         if(data.time_in && data.time_out && data.timeIn_scheule && data.timeOut_scheule){
          
//             const date_time_out_schedule = new Date(`${date} ${data.timeOut_scheule}:00`)

//             if(data.check_next_day) date_time_out_schedule.setDate(date_time_out_schedule.getDate()+1)
//             const differ_minute_in = validator.differ_time(data.time_in ,`${date} ${data.timeIn_scheule}`).minute
//             const differ_minute_out = validator.differ_time(data.time_out ,date_time_out_schedule).minute
    
//             // if(data.date == 4) console.log({differ_minute_in, differ_minute_out})
         
//             if(differ_minute_in >= 0 && (differ_minute_out >= -240 && differ_minute_out <= 240 )){
//                 data.workday = 1
//             }
//         }
    
//     }
//     if(data.branch_id){
//         const data_branch = await ModelBranch.findById(data.branch_id,{name:1})
//         data.branch_name = data_branch?.name
//     }
//     if(data.part_id){
//         const data_part = await ModelPart.findById(data.part_id,{name:1})
//         data.part_name = data_part?.name
//     }

//     return data
// }
// export const render_view_detail_timekeeping = async (req, res) => {
//     try {
//         const header = _headerURL(req)
//         const user_id = req.query.user_id
//         const fromdate = header.fromdate
//         const todate = header.todate
  
//         const data = await get_detail_by_employee(user_id, fromdate, todate)

//         const data_user = await ModelUser.findById(user_id)

//         return res.render('admin/timekeeping/report/detail_daily', { ...data, ...header, nickname: `${data_user.ID} - ${data_user.nickname}` })
//     } catch (e) {
//         console.log('Có lỗi: ', e)
//         return res.status(500).send(`Có lỗi xảy ra`)
//     }
// }

// export const get_detail_by_employee = async (user_id, str_fromdate, str_todate) => {
//     try {


//         const data_user = await ModelUser.findById(user_id)
//         if (!data_user) return null

//         const fromdate = new Date(str_fromdate)
//         const todate = new Date(new Date(str_todate).setDate(new Date(str_todate).getDate() + 1))
//         // const todate = new Date(str_todate)

//         // const todate_timekeeping = new Date(new Date(str_fromdate).setDate(new Date(str_fromdate).getDate()+1))
//         const data_confirm = await get_confirm_workday(str_fromdate, str_todate, user_id)

//         if(data_confirm._id){
       
//             return {
//                 data: data_confirm.data,
//                 total: data_confirm.workday,
//                 is_confirm:true
//             }
//         }
//         else{
//             const data = await ModelTimekeeping.find({ $and: [
//                 { time: { $gte: validator.startOfDay(fromdate) } }, 
//                 { time: { $lte: validator.endOfDay(todate) } },
//                 {code:data_user.ID}
//             ] 
//             }).sort({ time: 1 })
    
//             for (let i = 0; i < data.length; i++) {
//                 const _time = new Date(data[i].time)
//                 data[i].year = _time.getFullYear()
//                 data[i].date = _time.getDate()
//                 data[i].month = _time.getMonth() + 1
//             }
    
//             const array_date = validator.get_list_date_between_fromdate_todate(fromdate, todate) // mảng ngày từ fromdate đến todate
//             let total = 0
//             for (let i = 0; i < array_date.length; i++) {
//                 const info_one_day = await get_time_keeping_one_date(array_date[i].fulldate, data_user._id)
//                 array_date[i] = {
//                     ...array_date[i],
//                     ...info_one_day
//                 }
//                 total += info_one_day.workday
//             }
    
          
//             for (let i = 0; i < array_date.length; i++) {
               
//                 if(array_date[i].is_time_off) {
//                     array_date[i].status = "Off"
//                 }
//                 else if(array_date[i].is_furlough) {
//                     array_date[i].status = "nghỉ phép"
//                 }
//                 else{
//                     if(array_date[i].timeIn_scheule){
//                         if(!array_date[i].time_in){
//                             array_date[i].status = "vắng mặt"
//                         }
//                         else if(!array_date[i].time_out){
//                             array_date[i].status = "không xuống ca"
//                         }
//                         else {    
//                             const differ_minute_in = validator.differ_time(array_date[i].time_in ,`${array_date[i].fulldate} ${array_date[i].timeIn_scheule}`).minute
//                             const differ_minute_out = validator.differ_time(array_date[i].time_out ,`${array_date[i].fulldate} ${array_date[i].timeOut_scheule}`).minute
                           
//                             if( differ_minute_in  < 1)  {
//                                 array_date[i].status = "vào muộn"
//                             }             
//                             else if( differ_minute_in  < 0){
//                                 array_date[i].status = "vào sớm"
//                             }
//                             else if( differ_minute_out  < 1)  {
//                                 array_date[i].status = "ra muộn"
//                             } 
//                             else if( differ_minute_out  > 240 )  {
//                                 array_date[i].status = "ra sớm"
//                             } 
//                             else if( differ_minute_out  < -240 )  {
//                                 array_date[i].status = "không xuống ca"
//                             } 
//                             else
//                                 array_date[i].status = "đủ ca"
//                         }
//                     } else {
//                         array_date[i].status = 'không có lịch làm việc'
//                     }
//                 }
                
//             }
//             array_date.splice(array_date.length - 1, 1)
    
//             return {
//                 data: array_date,
//                 total: total,
//                 is_confirm:false
//             }
//         }
        
//     } catch (e) {
//         console.error(e)
//         return null
//     }
// }

// export const get_detail_from_api = async (req, res) => {
//     try {
//         const user_id = req.query.user_id
//         const date = req.query.date
  
//         const data = await get_time_keeping_one_date(date,user_id)
//         return res.json(data)
//     } catch (e) {
//         console.error(e)
//         return res.status(500).send(`Thất bại! Có lỗi xảy ra`)
//     }
// }
// export const edit_detail = async (req, res) => {
//     try {
//         const user_id = req.body.user_id
//         const date = req.body.date
//         const time_in = req.body.time_in
//         const time_out = req.body.time_out
//         const is_nextday = req.body.is_nextday === 'true'

//         const data_user = await ModelUser.findById(user_id)
//         if (!data_user) return res.status(400).send(`Thất bại! Không tìm thấy nhân viên`)

//         const data_confirm = await ModelConfirmTimekeeping.countDocuments({
//             $and: [{ fromdate: { $lte: validator.startOfDay(date) } }, { todate: { $gte: validator.endOfDay(date) } }, { user_id: validator.ObjectId(user_id) }],
//         })
//         if (data_confirm > 0) return res.status(400).send(`Thời gian này nằm trong ngày đã chốt công! Không thể chỉnh sửa`)
        
//         const new_date = new Date(date)
//         const data_save_old = await ModelEditTimekeeping.findOne({
//             $and:[
//                 {user_id:validator.ObjectId(user_id)},
//                 {date:new_date.getDate()},
//                 {month:new_date.getMonth()+1},
//                 {year:new_date.getFullYear()}
//             ]
//         })
//         const date_in = new Date(`${date} ${time_in}`)
//         const date_out = new Date(`${date} ${time_out}`)
//         if(is_nextday) date_out.setDate(date_out.getDate()+1) 
//         if(data_save_old){
            
//             await ModelEditTimekeeping.findByIdAndUpdate(data_save_old._id,{
//                 time_in: date_in,
//                 time_out: date_out,
//             })
//         }
//         else{
//             await new ModelEditTimekeeping({
//                 user_id:validator.ObjectId(user_id),
//                 date:new_date.getDate(),
//                 month:new_date.getMonth()+1,
//                 year:new_date.getFullYear(),
//                 time_in: date_in,
//                 time_out: date_out,
//             }).save()
//         }       
//         return res.json("success")

//     } catch (e) {
//         console.error(e)
//         return res.status(500).send(`Thất bại! Có lỗi xảy ra`)
//     }
// }

// export const render_view_confirm = async (req, res) => {
//     try {
//         const header = _headerURL(req)
//         const status = header.status
//         const search = header.search
//         const fromdate = header.fromdate
//         const todate = header.todate

//         let query = {}
//         if (validator.isDefine(search)) {
//             query = {
//                 ...query,
//                 $or: [{ ID: { $regex: '.*' + search + '.*', $options: 'i' } }, { nickname: { $regex: '.*' + search + '.*', $options: 'i' } }],
//             }
//         }
//         const part_id = req.query.part_id
//         const branch_id = req.query.branch_id
//         if (part_id && validator.ObjectId.isValid(part_id)) {
//             query = {
//                 ...query,
//                 part_id: validator.ObjectId(part_id),
//             }
//         }
//         if (branch_id && validator.ObjectId.isValid(branch_id)) {
//             query = {
//                 ...query,
//                 branch_id: validator.ObjectId(branch_id),
//             }
//         }

//         const data = await ModelUser.find(query, { _id: 1, nickname: 1, ID: 1, part_id: 1, branch_id: 1 }).skip(validator.getOffset(req)).limit(validator.getLimit(req))
//         for (let i = 0; i < data.length; i++) {
//             const data_confirm = await get_confirm_workday(fromdate, todate, data[i]._id)
//             delete data_confirm._id
//             data[i] = {
//                 ...data[i],
//                 ...data_confirm,
//             }
//         }
//         const count = await ModelUser.countDocuments(query)

//         const html_branch = await _htmlBranch({}, branch_id)
//         const html_part = await _htmlPart(part_id)
//         return res.render('admin/timekeeping/confirm/index', { data, count: count, length: data.length, ...header, html_branch, html_part })
//     } catch (error) {
//         return res.status(400).send(`Thất bại! Có lỗi xả ra`)
//     }
// }

// export const get_confirm_workday = async (fromdate, todate, user_id) => {
//     try {
//         const data = await ModelConfirmTimekeeping.findOne({
//             $and: [{ fromdate: { $eq: new Date(fromdate) } }, { todate: { $eq: new Date(todate) } }, { user_id: validator.ObjectId(user_id) }],
//         }).populate('data_creater')
      
//         let workday = 0
//         if (!data) {
//             return {
//                 _id: null,
//                 confirm_status: false,
//                 workday: workday,
//                 data: [],
//                 string_created: null,
//                 creater_nickname: null,
//             }
//         } else {
//             for (let i = 0; i < data.data.length; i++) {
//                 workday += data.data[i].workday
//             }
//             return {
//                 _id: data._id,
//                 confirm_status: true,
//                 data: data.data,
//                 workday: workday,
//                 creater_nickname: data.data_creater.nickname,
//                 string_created: data.string_created,
//             }
//         }
//     } catch (e) {
//         console.error(e)
//         return null
//     }
// }

// export const confirm_timekeeping = async (req, res) => {
//     try {
//         const {user_id, fromdate, todate} = req.body
//         const data_user = await ModelUser.findById(user_id)
        
//         const data_confirm = await get_confirm_workday(fromdate,todate,user_id)
//         if(data_confirm && data_confirm.confirm_status) return res.status(400).send(`Nhân viên đã được chốt ngày công! Xin hãy hủy chốt để có thể chỉnh sửa`)
//         const creater_id = req.auth._id
//         const data_timekeeping = await get_detail_by_employee(user_id, fromdate, todate)

//         const data = await new ModelConfirmTimekeeping({
//             user_id: validator.ObjectId(user_id),
//             fromdate: fromdate,
//             todate: todate,
//             creater_id: creater_id,
//             data: data_timekeeping.data,
//             workday: data_timekeeping.total,
//         }).save()
//         await create_logs(req.auth._id, `insert`, `Chốt ngày công của nhân viên ${data_user.ID}`, JSON.stringify(data))
//         return res.json(data)
//     } catch (error) {
//         console.error(error)
//         return res.status(400).send(`Thất bại! Nhân viên này đã được chốt ngày công`)
//     }
// }

// export const cancel_confirm_timekeeping = async (req, res) => {
//     try {
//         const { user_id, fromdate, todate } = req.body
//         const data_user = await ModelUser.findById(user_id)

//         const data_confirm = await get_confirm_workday(fromdate,todate,user_id)
//         if(data_confirm && data_confirm.confirm_status){
//             await ModelConfirmTimekeeping.deleteOne({_id:data_confirm._id})
//         }
//         await create_logs(req.auth._id, `delete`, `Hủy chốt ngày công của nhân viên ${data_user.ID}`, JSON.stringify(data_confirm))
//         return res.json('success')
//     } catch (error) {
//         console.error(error)
//         return res.status(400).send(`Thất bại! Nhân viên này đã được chốt ngày công`)
//     }
// }


// export const my_timekeeping = async (req, res) =>{
//     try {
//         const header = _headerURL(req)
//         const user_id = req.auth._id
//         const fromdate = header.fromdate
//         const todate = header.todate

//         const data = await get_detail_by_employee(user_id, fromdate, todate)
//         const data_confirm = await get_confirm_workday(fromdate, todate, user_id)

//         if (!data) return res.status(500).send(`Có lỗi xảy ra`)
//         const data_user = await ModelUser.findById(user_id)
//         if (!data_user) return null
  
//         if(data_confirm._id){
//             data.data = data_confirm.data
//         }
   
//         return res.render('admin/timekeeping/my_timekeeping/index', { ...data, data_confirm, ...header, nickname: `${data_user.ID} - ${data_user.nickname}` })
//     } catch (e) {
//         console.log('Có lỗi: ', e)
//         return res.status(500).send(`Có lỗi xảy ra`)
//     }
// }


// export const download_form_api = async (req, res) =>{
//     const fromdate = req.query.fromdate
//     const todate = req.query.todate


//     const data_user = await ModelUser.find({status:1})
//     const data = []
//     for(let i =0; i<data_user.length;i++){
//         const result_one = await get_report_download_one_user(data_user[i]._id, fromdate, todate)
//         data.push({
//             ...result_one,
//             nickname:data_user[i].nickname,
//             ID:data_user[i].ID
//         })
//     }
//     return res.json(data)

// }

// const get_report_download_one_user = async (user_id, fromdate, todate) =>{
//     const data = await get_detail_by_employee(user_id, fromdate, todate)

//     // data.total = 0 // tổng
//     data.total_off = 0 // ngày off
//     data.total_furlough = 0 // nghỉ phép
//     data.total_in_late = 0 // in muộn
//     data.total_out_soon = 0 // out sớm
//     data.not_in = 0 // không lăn tay khi lên ca
//     data.not_out = 0 // không lăn tay ra hết ca

//     for(let i=0;i<data.data.length;i++){
//         // kiểm tra xem có phải ngày nghỉ phép ko
//         if(data.data[i].status == "không xuống ca"){
//             data.not_out += 1
//         }
//         if(data.data[i].status == "vắng mặt"){
//             data.not_in += 1
//         }
//         if(data.data[i].status == "Off"){
//             data.total_off += 1
//         }
//         if(data.data[i].status == "nghỉ phép"){
//             data.total_furlough += 1
//         }
//         if(data.data[i].status == "vào muộn"){
//             data.total_in_late += 1
//         }
//         if(data.data[i].status == "ra sớm"){
//             data.total_out_soon += 1
//         }
//         // if(data.data[i].status == "đủ ca"){
//         //     data.total += 1
//         // }

//     }
    
//     return data
// }

// export const list_history = async (req, res) =>{
//     try {
//         const {user_id, date} = req.query
//         const date_query = new Date(date)
//         const user = await ModelUser.findById(user_id)
//         if(!user) throw new Error('Không tìm thấy nhân viên')
//         const data = await ModelTimekeeping.find({
//             $and:
//             [
//                 { time: { $gte: validator.startOfDay(date) } }, 
//                 { time: { $lte: validator.endOfDay(date) } },
//                 {code:user.ID}
//             ]
//         })

//         const data_edit = await ModelEditTimekeeping.find({
//             $and:[
//                 {user_id: user._id},
//                 {month: date_query.getMonth()+1},
//                 {year: date_query.getFullYear()},
//                 {date: date_query.getDate()},
//             ]
//         })
//         return res.json({
//             data:data,
//             data_edit:data_edit
//         })
//     } catch (error) {
//         return res.status(400).send(error.message)
//     }
// }