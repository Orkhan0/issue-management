package com.orkhans.issuemanagement.api;

import com.orkhans.issuemanagement.dto.ProjectDto;
import com.orkhans.issuemanagement.service.impl.ProjectServiceImp;
import com.orkhans.issuemanagement.util.ApiPaths;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/versioning")
@Api(value = ApiPaths.PorjectCtrl.CTRL, description = "Project APIs")
public class ProjectVersionApi {
    @Autowired
    private ProjectServiceImp projectServiceImpl;

    @GetMapping(value = "/{id}", params = "version=1")
    @ApiOperation(value = "Get By Id Operation V1", response = ProjectDto.class)
    public ResponseEntity<ProjectDto> getByIdV1(@PathVariable(value = "id", required = true) Long id) {
        ProjectDto projectDto = projectServiceImpl.getById(id);
        return ResponseEntity.ok(projectDto);
    }

    @GetMapping(value = "/{id}", params = "version=2")
    @ApiOperation(value = "Get By Id Operation V2", response = ProjectDto.class)
    public ResponseEntity<ProjectDto> getByIdV2(@PathVariable(value = "id", required = true) Long id) {
        ProjectDto projectDto = projectServiceImpl.getById(id);
        return ResponseEntity.ok(projectDto);
    }
}
