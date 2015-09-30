
/**
 * Created by lucaseac on 9/29/15.ntains functions for an assignment.
 * It requires data called greenjobs.
 */

/**
 * array containing the greenjobs data
 */
var greenjobs = greenjobs;
/**
 * Given greenjobs data, it returns a list of industries found in the data that are represented
 * in an array filled with Strings
 * @param data
 * @returns a list of industries as an array, containing strings
 */
function listIndustries(data){
  return _.uniq(_.pluck(data, 'Industry'));
}

/**
 * Given greenjobs data, it returns an array filled with objects where each object's key is
 * a county in Hawaii and each value is the number of green jobs listed in that county
 * @param data the greenjobs data to be used
 * @returns an array filled with objects where each object's key is
 * a county in Hawaii and each value is the number of green jobs listed in that county
 */
function countyGreenJobs(data){
  return _.countBy(data,function(num){
    return num['County'];
  });
}

//jobswithKeyword(data, keyword). This function can be passed //greenjobs and a string and returns a list of Job Titles //containing the passed string. For example, //jobsWithKeyword(greenjobs, “PV”) should return ["Electrician //(PV)", "PV System Designs", "PV Technician", "PV"].

/**
 * Given greenjobs data and a keyword, returns a list of jobs with that keyword in each of their titles
 * @param data the greenjobs data to be checked
 * @param keyword the keyword
 * @returns a list of jobs with that keyword in each of their titles
 */
function jobswithKeyword(data, keyword){
  var jobs = _.filter(data, function(num){ return num['Job Title'].indexOf(keyword) != -1; });

  return _.pluck(jobs, 'Job Title');
}
