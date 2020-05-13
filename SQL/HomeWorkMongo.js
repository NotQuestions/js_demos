// 1) ������ ��� ���� � ���� ������ ������ 4.2
// db.getCollection('students').find({
//     avgScore : 4.2
// })
// 2) ������ ��� ���� � 1 �����
// db.getCollection('students').find({
//     class : 1
// })

// 3) ������ ��� ���� �� �������� ������
// db.getCollection('students').find({
//    lessons : 'physics'
//    })
// 4) ������ ��� ����, ������ ���� �������� � ����� ( scientist )
//    db.getCollection('students').find({
//    'parents.profession' :  'scientist'
//    })
// 5) ������ ����, � ���� ������� ������ ����� �� 4
//    db.getCollection('students').find({
//    avgScore: {$gt: 4}
//    })

// 6) ������ ���������� ����
//       db.getCollection('students')
//       .find({})
//       .sort({avgScore: -1})
//       .limit(1)
// 7) ������ ��������� ����
//        db.getCollection('students')
//       .find({})
//       .sort({avgScore: 1})
//       .limit(1)
//       
// 8) ������ ��� 3 ����
//        db.getCollection('students')
//       .find({})
//       .sort({avgScore: -1})
//       .limit(3)
// 9) ������ ������� ��� �� ����
//              db.getCollection('students').aggregate([
//     {
//           $group: {
//                 "_id": '',
//                 avg: {
// 
//                         $avg: "$avgScore"
//                     }
//               }
//      }
// ])

// 10) ������ ������� ��� ���� �� �������� ���������� ��� ������
//       db.getCollection('students')
//       .aggregate([
//         {    
//         $match : {       
//         $or: 
//         [{ lessons: "physics" },
//         { lessons: "mathematics" }]
//                 }               
//         },
//         
//         {
//           $group: {
//             "_id": '',
//             avg: { $avg: "$avgScore" }
//            }
//         }
//      ])


// 11) ������ ������� ��� �� 2 ����
// 
//      db.getCollection('students')
//       .aggregate([
//         {    
//         $match : {  class: 2 }               
//         },
//         
//         {
//           $group: {
//             "_id": '',
//             avg: { $avg: "$avgScore" }
//            }
//         }
//      ])
// 
// 

// 12) ������ ���� � �� ������ ���

//        db.getCollection('students')
//       .find( 
// 
//       {   $or:[
//           { parents: null },
//           { parents: { $size: 1 } }
//           ]
//       }
//       );
        
// 13) ������ ������ �� �� ��������


//        db.getCollection('students')
//       .aggregate([
//       {
//           $match:{
//           $and:[
//           { parents: {$ne: null} },
//           { 'parents.profession': null }]
//           }
//       },
//       {
//        $group: {
//               '_id':'$parents'
//               
//               }
//       },
//       {$unwind:'$_id' },
//       {$match:{'_id.profession': null}}
// 
//       ]);
// 

// 14) �� ��������� ������ ���������� �����������

// db.getCollection('students').updateMany(
// {  $and:[
//           { parents: {$ne: null} },
//           { 'parents.profession': null }]
// },
// {  $set:{ 'parents.$.profession': 'Waitress' }}
//     
// )
// 
// 

// 15) ������� ����, �� ����� ������� ��� ����� �� 2.5
// db.getCollection('students').remove({'avgScore':{$lt:2.5}})
// 
// 16) ĳ���, ������ ���� �������� � ���� ( teacher ) ��������� 5
// db.getCollection('students').updateMany(
// {'parents.profession': 'teacher'},
// {$set:{avgScore:5}}
// )

// 17) ������ ���� �� ������� � ��������� ���� (�� 5 �����) � �������� ������ ( physics )
// db.getCollection('students').find(
// {
//     $and:[ { class: {$lte: 5} }, { lessons: 'physics' }]
// })
// 18) ������ ����������� ����

// db.getCollection('students').aggregate(
// [
// 
// {$group: {'_id':'$class', bestAvg:{$avg: '$avgScore'}}},
// {$sort: {'bestAvg': -1}},
// {$limit: 1}
// ])